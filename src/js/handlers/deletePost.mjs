import { load } from "../storage/index.mjs"

export async function setDeletePostListener() {

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

}