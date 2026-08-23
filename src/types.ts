export type Country = "vietnam" | "thailand";

export interface City {
  id: string;
  name: string;
  country: Country;
  generalInfo?: string;
}
