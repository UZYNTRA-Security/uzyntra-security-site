"use client";
import { Button } from "@/components/ui/button";
export function PrintInvoice(){return <Button className="print:hidden" onClick={()=>window.print()}>Download / print PDF</Button>}
