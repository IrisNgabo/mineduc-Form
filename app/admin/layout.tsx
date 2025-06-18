import { Layout } from "@/components/layout"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout userRole="admin">{children}</Layout>
} 