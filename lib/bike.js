import { db } from "../firebase.js";

function allBikes() {
	const [bikes, setBikes] = useState([]);
	  useEffect(() => {
		  db.collection("bikes")
			  .orderBy("createdAt")
			  .limit(50)
			  .onSnapshot((snapshot) => {
				  setBikes(snapshot.docs.map((doc) => doc.data()));
			  });
	  }, []);
	return bikes
}

//getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
	bikes = allBikes();

	{bikes.map(({ id }) => (
		
	))}

	return db.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/,""),//ファイル名
			}
		};
	});
}


//idに基づいてbikeデータを返す
export async function getBikeData(id) {
	const bikeData = doc(db, 'bikes', {id});

	return {
		id,
		bikeData
	};
}