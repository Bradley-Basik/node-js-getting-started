import { Text, View,Image } from "react-native";
import pfp from "../assets/cat.jpg"
const Profile = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{  fontSize: 20 }}>Member since: N/A</Text>
	 <Image source={pfp} style={{ width: 100, height: 100 }} />
   <Text style={{ fontSize: 20 }}>Please login or create an account</Text>
	</View>
);
};

export default Profile;
