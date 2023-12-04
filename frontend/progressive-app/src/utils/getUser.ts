import { supabase } from "~/lib/supabase-server";

export const getUser = async () => {
  const user = await supabase.auth.getUser();
  return user;
};
