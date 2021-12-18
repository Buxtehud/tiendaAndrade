import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";

const firestoreFetch = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const data = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return(data);
};

export default firestoreFetch;