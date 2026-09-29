import "server-only";
import type { Currency, ManualMethod } from "@/lib/commerce/types";

export function getManualMethods(currency: Currency): ManualMethod[] {
  const configured: Array<ManualMethod | null> = [
    process.env.MANUAL_BANK_IBAN && process.env.MANUAL_ACCOUNT_NAME ? { id:"bank_transfer",label:"Bank transfer",accountName:process.env.MANUAL_ACCOUNT_NAME,instructions:`Bank: ${process.env.MANUAL_BANK_NAME || "UZYNTRA bank account"}\nIBAN: ${process.env.MANUAL_BANK_IBAN}`,currencies:["PKR"] } : null,
    process.env.MANUAL_JAZZCASH_NUMBER && process.env.MANUAL_ACCOUNT_NAME ? { id:"jazzcash",label:"JazzCash",accountName:process.env.MANUAL_ACCOUNT_NAME,instructions:`JazzCash: ${process.env.MANUAL_JAZZCASH_NUMBER}`,currencies:["PKR"] } : null,
    process.env.MANUAL_EASYPAISA_NUMBER && process.env.MANUAL_ACCOUNT_NAME ? { id:"easypaisa",label:"Easypaisa",accountName:process.env.MANUAL_ACCOUNT_NAME,instructions:`Easypaisa: ${process.env.MANUAL_EASYPAISA_NUMBER}`,currencies:["PKR"] } : null,
    process.env.MANUAL_REMITTANCE_INSTRUCTIONS && process.env.MANUAL_ACCOUNT_NAME ? { id:"remittance",label:"International bank wire",accountName:process.env.MANUAL_ACCOUNT_NAME,instructions:process.env.MANUAL_REMITTANCE_INSTRUCTIONS,currencies:["USD"] } : null,
  ];
  return configured.filter((item): item is ManualMethod => Boolean(item?.currencies.includes(currency)));
}
