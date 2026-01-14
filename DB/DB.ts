import { MongoClient } from "mongodb";

type URI = string;

export namespace Utils {
  export const getURI = (uri: URI) => {
    return uri;
  };

  export const insertCustomData = (data: string) => {
    return data;
  };
}

export namespace Client {
  export async function connect(dataString: string) {
    try {
      const m = new MongoClient(Utils.getURI("mongodb://localhost:27017"));
      await m.connect();
      console.log("Connected to MongoDB...");

      const db = m.db("Command");
      const col = db.collection("Commands");

      const dataByUser = Utils.insertCustomData(dataString);
      await col.insertOne({ data: dataByUser });

      if (dataByUser === null) {
        console.log(dataByUser);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
