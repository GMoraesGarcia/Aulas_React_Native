import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

const DATA = [
  {
    "id": 1,
    "nome": "Leanne Graham",
    "nome de usuário": "Bret",
    "email": "Sincere@april.biz",
    "Morada": {
      "rua": "Kulas Light",
      "suite": "Apt. 556",
      "cidade": "Gwenborough",
      "CEP": "92998-3874",
      "geo": {
        "lat": "-37,3159",
        "lng": "81,1496"
      }
    },
    "telefone": "1-770-736-8031 x56442",
    "site": "hildegard.org",
    "empresa": {
      "nome": "Romaguera-Crona",
      "catchPhrase": "Rede neural cliente-servidor multicamadas",
      "bs": "aproveite os mercados eletrônicos em tempo real"
    }
  },
  {
    "id": 2,
    "nome": "Ervin Howell",
    "nome de usuário": "Antonette",
    "email": "Shanna@melissa.tv",
    "Morada": {
      "rua": "Victor Plains",
      "suite": "Suite 879",
      "cidade": "Wisokyburgh",
      "CEP": "90566-7771",
      "geo": {
        "lat": "-43,9509",
        "lng": "-34,4618"
      }
    },
    "telefone": "010-692-6593 x09125",
    "site": "anastasia.net",
    "empresa": {
      "nome": "Deckow-Crist",
      "catchPhrase": "Contingência didática proativa",
      "bs": "sinergizar cadeias de suprimentos escalonáveis"
    }
  },
  {
    "id": 3,
    "nome": "Clementine Bauch",
    "nome de usuário": "Samantha",
    "email": "Nathan@yesenia.net",
    "Morada": {
      "rua": "Extensão Douglas",
      "suite": "Suite 847",
      "cidade": "McKenziehaven",
      "CEP": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47,0653"
      }
    },
    "telefone": "1-463-123-4447",
    "site": "ramiro.info",
    "empresa": {
      "nome": "Romaguera-Jacobson",
      "catchPhrase": "Interface bifurcada face a face",
      "bs": "aplicativos estratégicos e-enable"
    }
  },
  {
    "id": 4,
    "nome": "Patricia Lebsack",
    "nome de usuário": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "Morada": {
      "rua": "Hoeger Mall",
      "suite": "Apt. 692",
      "cidade": "Elvis do Sul",
      "CEP": "53919-4257",
      "geo": {
        "lat": "29,4572",
        "lng": "-164,2990"
      }
    },
    "telefone": "493-170-9623 x156",
    "site": "kale.biz",
    "empresa": {
      "nome": "Robel-Corkery",
      "catchPhrase": "Produtividade de tolerância zero multicamadas",
      "bs": "serviços da web de última geração de transição"
    }
  },
  {
    "id": 5,
    "nome": "Chelsey Dietrich",
    "nome de usuário": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "Morada": {
      "rua": "Skiles Walks",
      "suite": "Suite 351",
      "cidade": "Roscoeview",
      "CEP": "33263",
      "geo": {
        "lat": "-31,8129",
        "lng": "62.5342"
      }
    },
    "telefone": "(254) 954-1289",
    "site": "demarco.info",
    "empresa": {
      "nome": "Keebler LLC",
      "catchPhrase": "Solução tolerante a falhas centrada no usuário",
      "bs": "revolucionar sistemas ponta a ponta"
    }
  },
  {
    "id": 6,
    "nome": "Sra. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "Morada": {
      "rua": "Norberto Crossing",
      "suite": "Apt. 950",
      "cidade": "South Christy",
      "CEP": "23505-1337",
      "geo": {
        "lat": "-71,4197",
        "lng": "71,7478"
      }
    },
    "telefone": "1-477-935-8478 x6430",
    "site": "ola.org",
    "empresa": {
      "nome": "Considine-Lockman",
      "catchPhrase": "Interface de linha de base sincronizada",
      "bs": "aplicativos inovadores e-enable"
    }
  },
  {
    "id": 7,
    "nome": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "Morada": {
      "rua": "Rex Trail",
      "suite": "Suite 280",
      "cidade": "Howemouth",
      "CEP": "58804-1099",
      "geo": {
        "lat": "24,8918",
        "lng": "21.8984"
      }
    },
    "telefone": "210.067.6132",
    "site": "elvis.io",
    "empresa": {
      "nome": "Grupo Johns",
      "catchPhrase": "Força-tarefa multimídia configurável",
      "bs": "gerar e-tailers empresariais"
    }
  },
  {
    "id": 8,
    "nome": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "Morada": {
      "rua": "Ellsworth Summit",
      "suite": "Suite 729",
      "cidade": "Aliyaview",
      "CEP": "45169",
      "geo": {
        "lat": "-14,3990",
        "lng": "-120,7677"
      }
    },
    "telefone": "586.493.6943 x140",
    "site": "jacynthe.com",
    "empresa": {
      "nome": "Abernathy Group",
      "catchPhrase": "Conceito secundário implementado",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "nome": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "Morada": {
      "rua": "Dayna Park",
      "suite": "Suite 449",
      "cidade": "Bartholomebury",
      "código postal": "76495-3109",
      "geo": {
        "lat": "24,6463",
        "lng": "-168.8889"
      }
    },
    "telefone": "(775)976-6794 x41206",
    "site": "conrad.com",
    "empresa": {
      "nome": "Yost and Sons",
      "catchPhrase": "Projeto baseado em contexto comutável",
      "bs": "agregar tecnologias em tempo real"
    }
  },
  {
    "id": 10,
    "nome": "Clementina DuBuque",
    "nome de usuário": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "Morada": {
      "rua": "Kattie Turnpike",
      "suite": "Suite 198",
      "cidade": "Lebsackbury",
      "CEP": "31428-2261",
      "geo": {
        "lat": "-38,2386",
        "lng": "57,2232"
      }
    },
    "telefone": "024-648-3804",
    "site": "ambrose.net",
    "empresa": {
      "nome": "Hoeger LLC",
      "catchPhrase": "Força-tarefa de capacitação centralizada",
      "bs": "modelos de ponta a ponta"
    }
  }
]

const Dados = ({email,func,link}) => (
     <View>
      <Pressable onPress={func}>
        
        <Text 
          style={styles.paragraph}
          source={{
            uri: link,
          }}
          >{link}</Text>
          <Text style={styles.paragraph}>{email}</Text>
      </Pressable>
    </View>
)

export default function App() {
  function renderItem({item}){
  return(
    <Dados email={item.email} 
            func={() => (alert(item.nome))} 
            link={item.id}
    />
  )
}
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
