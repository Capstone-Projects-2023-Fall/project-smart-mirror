import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useFormikContext, Formik, Form, Field } from "formik";
import { User } from "@supabase/auth-helpers-nextjs";
import { FormikProps, FormikValues } from "formik";
import { supabase } from "~/lib/supabase-client";
import debounce from "lodash/debounce";

type Props = {
  user: User | null;
};

export default function UserSettings({ user }: Props) {
  const [username, setUsername] = useState<string>("");

  const debounced = useCallback(
    debounce(async (value) => {
      const { error } = await supabase
        .from("profiles")
        .update({ username: value })
        .eq("id", (await supabase.auth.getUser()).data?.user?.id);
      if (error) console.error(error);
    }, 1500),
    [],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUsername(input);
    debounced(input);
  };
  return (
    <>
      <h2 className="my-8 font-bold">User</h2>
      <form>
        <label>
          <p>Change your username</p>
          <input
            type="text"
            name="username"
            className="mt-1 appearance-none rounded-md border-2 border-primary bg-background px-2 outline-none"
            value={username}
            onChange={onChange}
          />
          <p className="text-black-light text-sm">
            Smart Mirror chooses a random name for you when you create your
            account. We'll use this name to address you. You can change it
            anytime here.
          </p>
        </label>
      </form>
    </>
  );
}
