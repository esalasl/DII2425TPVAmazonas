import{View, Text, Button} from "react-native";

function mesas({navigation}){

return(
<View style={styles.container}> 
    <Text>MENU MESAS</Text> 

<View style={styles.button}>
    <Button title="INSERTAR"></Button>
</View>
<View style={styles.button}>
    <Button title="COMPROBAR"></Button>
</View >
<View style={styles.button}>
    <Button title="COBRAR"></Button>
</View> 
<View style={styles.button}>
<Button onPress={()=>navigation.goBack()}></Button>
</View  >
</View>
); 
}

export default mesas();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding : 100
      
    },
    button : {
        marginBotton: 15,
        width: "80%"
    }


  });
  