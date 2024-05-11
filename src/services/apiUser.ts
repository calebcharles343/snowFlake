import supabase, { supabaseUrl } from "./supabase";

export async function getUser() {
  const { data, error } = await supabase.from("userProfile").select("*");
  if (error) {
    console.log(error);
    throw new Error("User could not be loaded");
  }

  return data;
}

export async function deleteUser(id: number) {
  const { data, error } = await supabase
    .from("userProfile")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("User could not be deleted");
  }
  return data;
}

export async function createUser(user: any) {
  const hasImagePath = user.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${user.image.name}`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? user.image
    : `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;
  // https://puhxyxdebgyylukivpcd.supabase.co/storage/v1/object/public/avatars/SnowflakeHomePage.jpg?t=2024-04-23T09%3A01%3A23.146Z

  //CREATE USER
  const { data, error } = await supabase
    .from("userProfile")
    .insert([{ ...user, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("User could not be created");
  }

  //2.UPLOAD IMAGE

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, user.image);
  if (storageError) {
    console.log(error);
    throw new Error("Image could not be upload");
  }

  //3. DELETE USER IF ERROR UPLOADING IMAGE

  if (storageError) {
    await supabase.from("userProfile").delete().eq("id", user.id);
    console.log(storageError);
    throw new Error("User Image could not be upload and user is not created");
  }
  return data;
}

export async function editUser(user: any, id: number) {
  const hasImagePath = user.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${user.image.name}`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? user.image
    : `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;
  // https://puhxyxdebgyylukivpcd.supabase.co/storage/v1/object/public/avatars/SnowflakeHomePage.jpg?t=2024-04-23T09%3A01%3A23.146Z

  //UPDATE USER
  const { data, error } = await supabase
    .from("userProfile")
    .update({ ...user, image: imagePath })
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("User could not be created");
  }

  //2.UPLOAD IMAGE

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, user.image);
  if (storageError) {
    console.log(error);
    throw new Error("Image could not be upload");
  }

  //3. DELETE USER IF ERROR UPLOADING IMAGE

  if (storageError) {
    await supabase.from("userProfile").delete().eq("id", user.id);
    console.log(storageError);
    throw new Error("User Image could not be upload and user is not created");
  }
  return data;
}
