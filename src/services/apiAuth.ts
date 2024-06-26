import { LoginT, SignupT, UpdateUserT } from "../Interfaces";
import supabase, { supabaseUrl } from "./supabase";

export async function signup({
  firstName,
  lastName,
  email,
  password,
}: SignupT) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: LoginT) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({
  password,
  firstName,
  lastName,
  avatar,
}: Partial<UpdateUserT>) {
  //1. update password or fullName

  let updateData;
  if (password) updateData = { password };
  if (firstName || lastName) updateData = { data: { firstName, lastName } };

  const { data, error } = await supabase.auth.updateUser(updateData as any);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  //2, Upload the avatar image

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: imageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (imageError) throw new Error(imageError.message);

  //3.update avatar in the user

  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updateUser;
}
