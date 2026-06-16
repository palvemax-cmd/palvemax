import { redirect } from "next/navigation";

// Root redirects to Finnish (primary language for palvemax.fi)
export default function RootPage() {
  redirect("/fi");
}
