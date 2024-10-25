import { recordsData } from "../../Config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const getRecords = async (records) => {
  try {
    const data = await getDocs(collection(recordsData, records));
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (error) {
    console.error(error);
  }
};
