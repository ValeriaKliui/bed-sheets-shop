export default function saveItemToLS(id: string) {
  if (typeof window !== "undefined") {
    const prevSavedItems = localStorage.getItem("recent");
    const itemsArray = prevSavedItems ? JSON.parse(prevSavedItems) : [];

    itemsArray.unshift(id);

    localStorage.setItem("recent", JSON.stringify(itemsArray));
  }
}
