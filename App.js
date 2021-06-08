import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList,Alert } from 'react-native';
import ListItem from './components/ListItem'
import {uuid} from 'uuidv4'
import Header from './components/Header'
import AddItem from './components/AddItem'

export default function App() {
 const [items,setItems] = useState([

      {id:uuid(),text:'Milk'},
      {id:uuid(),text:'Egg'},
      {id:uuid(),text:'Bread'},
      {id:uuid(),text:'Suger'},
   ])

  const deleteItem = (id)=>{
    setItems(prevItem => {
      return prevItems.filter(item=>item.id != id)
    })
  }
  const addItem = ()=>{
    if(!text){
      Alert.alert('Error','please Enter Items',{text:'ok'})
    }else{
        setItem(prevItems=>{
      return [{id: uuid(),text}, ...prevItems]
    })
    }
  
  }
  return (
    <View style={styles.container}>
     <Header />
     <AddItem addItem={addItem}/>
   
     <FlatList 
     data={items} 
     renderItem={({item})=> (
     <ListItem item={item} deleteItem={deleteItem}/>
     )}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
   
  },
 
});
