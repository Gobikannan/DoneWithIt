import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Icon from "../components/Icon";

const initialMessages = [
  {
    id: 1,
    title: "T1",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/food.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((x) => x.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          ImageComponent={<Icon name="email" size={70} />}
          onPress={() => console.log("message selected", item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={() => <ListItemSeparator />}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/food.jpg"),
          },
        ]);
      }}
    />
  );
}

export default MessagesScreen;
