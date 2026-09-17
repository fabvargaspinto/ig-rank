import { redirect } from "next/navigation";
import RegisterPage from "@/features/register/register-page";
import { getAuthSession } from "@/lib/supabase/session";

type RegisterRouteProps = {
    searchParams: Promise<{ error?: string }>;
};

export default async function page({ searchParams }: RegisterRouteProps) {
    if (await getAuthSession()) {
        redirect("/tree");
    }

    const params = await searchParams;

    return (
        <RegisterPage initialError={params.error} />
    );
}
