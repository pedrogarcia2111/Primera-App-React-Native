import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';



function Contador() {
  const [contador, setContador] = useState(0);

  function Sumar() {
    setContador(contador + 1);
  }
  function Restar() {
    setContador(contador - 1);
  }

  function Reiniciar() {
    setContador(0);
  }


  return (

    <View style={styles.contenedor}>

        <Text style={styles.contador}>Contador: {contador}</Text>

        <TouchableOpacity style={styles.boton} onPress={Sumar}>
          <Text style={styles.textoboton}>Sumar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.boton} onPress={Restar}>
          <Text style={styles.textoboton}>Restar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.boton} onPress={Reiniciar}>
          <Text style={styles.textoboton}>Reiniciar</Text>
        </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  contador: {
    fontSize: 40,
    marginBottom: 25,
    fontWeight: '600',
    color: 'white'
  },
  boton: {
    alignItems: 'center',
    backgroundColor: '#0080ff',
    padding: 10,
    marginTop: 35,
    width: 170,
    borderRadius: 7
  },
  textoboton: {
    fontSize: 20,
    color: 'white'
  }
  });
  
export default Contador;
