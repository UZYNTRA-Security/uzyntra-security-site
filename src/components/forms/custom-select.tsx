"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption = { label: string; value: string };
export type SelectGroup  = { group: string; options: SelectOption[] };
export type SelectItems  = SelectOption[] | SelectGroup[];

function isGrouped(items: SelectItems): items is SelectGroup[] {
  return items.length > 0 && "group" in items[0];
}

interface CustomSelectProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  items: SelectItems;
  required?: boolean;
  searchable?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export function CustomSelect({
  id,
  name,
  label,
  placeholder = "Select",
  items,
  required,
  searchable = false,
  value: controlledValue,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen]       = useState(false);
  const [selected, setSelected] = useState("");
  const [query, setQuery]     = useState("");
  const containerRef          = useRef<HTMLDivElement>(null);
  const searchRef             = useRef<HTMLInputElement>(null);
  const listRef               = useRef<HTMLUListElement>(null);
  const [focused, setFocused] = useState(-1);

  const value = controlledValue ?? selected;

  // Flatten all options for search + keyboard nav
  const allOptions: SelectOption[] = isGrouped(items)
    ? (items as SelectGroup[]).flatMap((g) => g.options)
    : (items as SelectOption[]);

  const filtered = query.trim()
    ? allOptions.filter((o) =>
        o.label.toLowerCase().includes(query.toLowerCase())
      )
    : null; // null = show grouped/original

  const displayLabel =
    allOptions.find((o) => o.value === value)?.label ?? "";

  function select(val: string) {
    setSelected(val);
    onChange?.(val);
    setOpen(false);
    setQuery("");
    setFocused(-1);
  }

  function toggle() {
    setOpen((v) => !v);
    setQuery("");
    setFocused(-1);
  }

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search on open
  useEffect(() => {
    if (open && searchable) {
      setTimeout(() => searchRef.current?.focus(), 30);
    }
  }, [open, searchable]);

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    const opts = filtered ?? allOptions;
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") { setOpen(false); return; }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocused((f) => Math.min(f + 1, opts.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocused((f) => Math.max(f - 1, 0));
    } else if (e.key === "Enter" && focused >= 0) {
      e.preventDefault();
      select(opts[focused].value);
    }
  }

  // Scroll focused item into view
  useEffect(() => {
    if (focused >= 0 && listRef.current) {
      const item = listRef.current.querySelectorAll<HTMLLIElement>("[data-option]")[focused];
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [focused]);

  const renderOptions = (opts: SelectOption[], offset = 0) =>
    opts.map((opt, i) => {
      const idx = offset + i;
      const isSelected = opt.value === value;
      const isFocused  = focused === idx;
      return (
        <li
          key={opt.value}
          data-option
          role="option"
          aria-selected={isSelected}
          onClick={() => select(opt.value)}
          onMouseEnter={() => setFocused(idx)}
          className={cn(
            "flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-100",
            isFocused && !isSelected && "bg-slate-50 text-slate-950",
            isSelected
              ? "bg-red-50 font-medium text-red-700"
              : "text-slate-700"
          )}
        >
          <span className="leading-snug">{opt.label}</span>
          {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-red-600" />}
        </li>
      );
    });

  return (
    <div className="grid gap-2" ref={containerRef} onKeyDown={handleKeyDown}>
      <label htmlFor={id} className="text-sm font-medium text-slate-900">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </label>

      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={value} />

      {/* Trigger button */}
      <button
        type="button"
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-required={required}
        onClick={toggle}
        className={cn(
          "flex h-11 w-full items-center justify-between gap-2 rounded-xl border px-4 text-sm transition-all duration-200",
          "bg-white text-left",
          open
            ? "border-red-400 shadow-[0_0_0_3px_rgba(220,38,38,0.10)] ring-0"
            : "border-slate-200 hover:border-red-300 hover:shadow-sm",
          !value && "text-slate-400",
          value && "text-slate-900"
        )}
      >
        <span className="truncate">{value ? displayLabel : placeholder}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200",
            open && "rotate-180 text-red-500"
          )}
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="listbox"
        aria-label={label}
        className={cn(
          "absolute z-[60] mt-1 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.12)] transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
        style={{ top: "100%", left: 0, position: "absolute", minWidth: "100%" }}
      >
        {/* Search bar */}
        {searchable && (
          <div className="border-b border-slate-100 p-2">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-red-300 focus-within:bg-white transition-colors duration-150">
              <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setFocused(0); }}
                placeholder="Search…"
                className="w-full bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
              />
            </div>
          </div>
        )}

        {/* Options list */}
        <ul
          ref={listRef}
          className="max-h-64 overflow-y-auto overscroll-contain p-1.5 scrollbar-thin"
        >
          {/* Empty placeholder option */}
          {!required && !filtered && (
            <li
              data-option
              role="option"
              aria-selected={value === ""}
              onClick={() => select("")}
              onMouseEnter={() => setFocused(-1)}
              className={cn(
                "cursor-pointer rounded-lg px-3 py-2.5 text-sm text-slate-400 transition-colors hover:bg-slate-50",
                value === "" && "bg-red-50 text-red-600"
              )}
            >
              {placeholder}
            </li>
          )}

          {filtered ? (
            filtered.length > 0
              ? renderOptions(filtered)
              : <li className="px-3 py-4 text-center text-sm text-slate-400">No results</li>
          ) : isGrouped(items) ? (
            (items as SelectGroup[]).map((group, gi) => {
              const offset = (items as SelectGroup[])
                .slice(0, gi)
                .reduce((acc, g) => acc + g.options.length, 0);
              return (
                <li key={group.group}>
                  <p className="px-3 pb-1 pt-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {group.group}
                  </p>
                  <ul>{renderOptions(group.options, offset)}</ul>
                </li>
              );
            })
          ) : (
            renderOptions(items as SelectOption[])
          )}
        </ul>
      </div>
    </div>
  );
}
