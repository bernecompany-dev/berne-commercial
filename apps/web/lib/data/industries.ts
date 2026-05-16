import type { LucideIcon } from "lucide-react"
import {
  Utensils,
  Factory,
  Store,
  Hotel,
  Warehouse,
  Building2,
  Hospital,
  School,
  Truck,
  Users,
  ShoppingCart,
  Building,
} from "lucide-react"

export type Industry = {
  slug: string
  name: string
  blurb: string
  icon: LucideIcon
}

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    blurb: "Refrigeration, fryers, ovens, ice machines — same-day response.",
    icon: Utensils,
  },
  {
    slug: "commercial-kitchens",
    name: "Commercial Kitchens",
    blurb: "Production kitchens, ghost kitchens, catering operations.",
    icon: Utensils,
  },
  {
    slug: "food-production",
    name: "Food Production",
    blurb: "Walk-ins, deep freeze and processing equipment.",
    icon: Factory,
  },
  {
    slug: "grocery-stores",
    name: "Grocery & Supermarkets",
    blurb: "Display coolers, walk-ins, deli prep, ice systems.",
    icon: ShoppingCart,
  },
  {
    slug: "hotels",
    name: "Hotels",
    blurb: "Kitchens, laundry, ice machines and BOH equipment.",
    icon: Hotel,
  },
  {
    slug: "retail-chains",
    name: "Retail Chains",
    blurb: "Multi-location service with vendor reporting.",
    icon: Store,
  },
  {
    slug: "property-management",
    name: "Property Management",
    blurb: "Building-wide equipment coverage and replacement.",
    icon: Building2,
  },
  {
    slug: "facility-management",
    name: "Facility Management",
    blurb: "Vendor-ready dispatch and routine PM.",
    icon: Building,
  },
  {
    slug: "warehouses",
    name: "Warehouses",
    blurb: "Cold storage, break rooms, on-site kitchens.",
    icon: Warehouse,
  },
  {
    slug: "medical-facilities",
    name: "Medical Facilities",
    blurb: "Ice machines, pharmacy refrigeration, staff kitchens.",
    icon: Hospital,
  },
  {
    slug: "schools",
    name: "Schools",
    blurb: "Cafeteria refrigeration and cooking equipment.",
    icon: School,
  },
  {
    slug: "condo-buildings",
    name: "Condo Buildings",
    blurb: "Common-area appliances and amenity kitchens.",
    icon: Building,
  },
  {
    slug: "franchises",
    name: "Franchises",
    blurb: "Standardized service across locations.",
    icon: Users,
  },
  {
    slug: "logistics",
    name: "Logistics & Distribution",
    blurb: "Refrigerated storage and break-room equipment.",
    icon: Truck,
  },
]
