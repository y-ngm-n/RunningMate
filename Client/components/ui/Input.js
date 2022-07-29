import {View,Text,TextInput,StyleSheet} from 'react-native';
import { deviceHeight,deviceWidth } from '../../util/device-information';

function Input({text,onChangeText,value,encrypt,keyboardType}){
    if (encrypt){
        return(
        <TextInput
        placeholder={text}
        style={styles.input}
        autoCapitalize="none"
        onChangeText={onChangeText}
        secureTextEntry
        value={value}
        keyboardType={keyboardType} 
      />
        )
    }
    else{
        return(
            <TextInput
            placeholder={text}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={onChangeText}
            value={value} 
          />
            )
    }
}

export default Input;

const styles=StyleSheet.create({
    input: {
        borderColor:'#dadada',
        borderWidth:1,
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: "white",
        borderRadius: 4,
        fontSize: 12,
        width:deviceWidth*0.9,
        height:40,
      },
})