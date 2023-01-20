import React, { cloneElement, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View, Modal, TouchableOpacity} from "react-native";
import { LIST_DATA, SIZE_DATA, TRENDING_DATA } from "../constant/Data";
import { leftImg1, recently } from "../constant/Image";

export default function(){
const [modalFlag,setModal] = useState(false);
const [selectedItem,setSelectedItem] = useState({});
const [selectedSize,setSize] = useState(0);
const cardItem = ({item})=>{
    return (
            <View>
                <View style={{width:200}}>
                    <Text style={{padding:2,color:"gray"}}>{item.type}</Text>

                    <TouchableOpacity onPress={()=>{
                        setModal(true);
                        setSelectedItem(item)
                    }}
                    style={[{width:"80%",height:"90%", 
                    backgroundColor:item.color,borderRadius:10,justifyContent:"flex-end",overflow:"hidden"}]}>
                    
                        <View style={{width:"200%",height:100,backgroundColor:"white",position:"absolute",top:0,
                        left:-20,transform:[{rotate:"40deg"}]}}/>
                        <Image
                        source={item.img}
                        resizeMode="center"
                        style={{
                        position:"absolute",
                        left:10,
                        top:10,
                        width:"100%",
                        height:100,
                        marginTop:20,
                        transform: [{rotate:"-15deg"}]}}/>
                        <Text style={{padding:10,fontSize:20,color:"white"}}>{item.name}</Text>
                        <Text style={{padding:10,fontSize:25,fontWeight:"bold",color:"white"}}>{item.price}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}

const ShoeListItem = ({item})=>{
    return(
        <TouchableOpacity style={{flexDirection:"row"}}>
            <View style={{justifyContent:"center"}}>
                <Image
                source={item.img}
                resizeMode="center"
                style={{width:100,height:80}}
                />
            </View>
            <View style={{justifyContent:"center",paddingHorizontal:10}}>
                <Text style={{fontSize:20,color:"gray"}}>{item.name}</Text>
                <Text style={{fontSize:10,fontWeight:"bold"}}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

    return (
        <View style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <View style={{flex:0.4,padding:10}}>
                <Text style={{fontSize:24,letterSpacing:4,fontWeight:"bold",color:"black"}}>TRENDING</Text>
                <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={TRENDING_DATA}
                renderItem={(item)=>cardItem(item)}
                keyExtractor={(item)=>item.id}
                />
            </View>
            <View style={[styles.shadow,{flex:0.6, borderTopLeftRadius:20,width:"100%",
            borderTopRightRadius:20,flexDirection:"row"}]}>
                <View style={{flex:0.2}}>
                <Image
                source={recently}
                resizeMode="contain"
                style={{width:"100%",height:"100%"}}/>
                </View>

                <View style={{flex:1,height:"100%"}}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={LIST_DATA}
                    renderItem={(item)=>ShoeListItem(item)}
                    keyExtractor={(item)=>item.id}
                    style={{padding:10}}
                    
                    />    
                </View>                
            </View>            
            <Modal
            transparent={true}
            animationType="slide"
            visible={modalFlag}>
                <View style={{flex:1,justifyContent:"center",backgroundColor:"#F4F9F9",opacity:0.9}}>
                    <TouchableOpacity style={{flex:0.5}} onPress={()=>{
                        setModal(false);
                        setSelectedItem({});
                        setSize(0)}}/>
                    <View style={{flex:1,
                    justifyContent:"center",alignItems:"center"}}>
                        <View style={{width:"90%",borderRadius:20,height:"100%"}}>
                            <View style={{flex:0.9,opacity:0.8,backgroundColor:selectedItem.color,justifyContent:"space-around",
                            borderTopLeftRadius:20,borderTopRightRadius:20}}>
                                <Image
                                source={selectedItem.img}
                                resizeMode="center"
                                style={{width:"80%",height:"50%",transform:[{rotate:"-15deg"},{scale:1.2}]}}/>
                                <View>
                                    <Text style={{paddingTop:40,paddingHorizontal:10,fontSize:30,color:"white"}}>{selectedItem.name}</Text>
                                    <Text style={{paddingTop:10,paddingHorizontal:10,fontSize:30,fontWeight:"bold",color:"white"}}>{selectedItem.price}</Text>
                                </View>
                                <View>
                                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                        <Text style={{paddingHorizontal:10,fontSize:20,color:"white",
                                        textAlign:"center"}}>Select Size</Text>
                                        <View style={{flex:1,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                                            {SIZE_DATA.map((a,index)=>{
                                                return (
                                                    <TouchableOpacity 
                                                    key={a}
                                                    onPress={()=>setSize(a)}
                                                    style={{padding:5,borderWidth:2,margin:2,width:40,height:40,
                                                    borderColor: selectedSize === a ? "black":"white"}}>
                                                        <Text 
                                                        style={{fontSize:16,textAlign:"center",
                                                        color: selectedSize === a ? "black":"white"}}
                                                        >{a}</Text>
                                                    </TouchableOpacity>)
                                            })}
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:0.1,position:"absolute",bottom:0,width:"100%",
                            borderBottomLeftRadius:20,borderBottomRightRadius:20,
                            backgroundColor:selectedItem.color,justifyContent:"center"}}>
                                <Text style={{fontSize:30,color:"white",textAlign:"center"}}>
                                Add to Cart</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{flex:0.5}} onPress={()=>{
                        setModal(false);
                        setSelectedItem({});
                        setSize(0)                        
                        }}/>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'},
    shadow:{
        shadowRadius:10,
        shadowOpacity:1,
        shadowOffset:{ width:6, height:10},
        elevation:4
    }
    });
  