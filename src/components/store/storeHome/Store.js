import React from "react";
import Layout from "../../../screens/Layout";
import StoreHeading from "./StoreHeading";
import StoreSearch from "./StoreSearch";
import StoreProducts from "./StoreProducts";
import { Chip } from "react-native-paper";
import { FlatList } from "react-native";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["Paracetamol", "Sinix", "decold"],
      usertag: "",
    };
  }
  inputHandler = (e) => {
    this.setState({
      ...this.state,
      usertag: e !== null ? e.trim() : "",
    });
  };

  submitHandler = () => {
    if (this.state.usertag !== "") {
      this.setState({
        ...this.state,
        tags: [...this.state.tags, this.state.usertag],
        usertag: "",
      });
    }
  };

  deleteTag = (index) => {
    let newarray = this.state.tags;
    newarray.splice(index, 1);
    this.setState({
      ...this.state,
      tags: newarray,
    });
  };
  renderItem = ({ item }) => {
    return (
      <Chip
        mode="outlined"
        onPress={() => this.deleteTag(this.state.tags.indexOf(item))}
        onClose={() => this.deleteTag(this.state.tags.indexOf(item))}
        key={item}
      >
        {item}
      </Chip>
    );
  };

  render() {
    return (
      <>
        <Layout cart={true}>
          <StoreHeading topic={"Online Pharmacy"} />
          <StoreSearch
            tags={this.state.tags}
            defaultvalue={this.state.usertag}
            onClick={(value) => this.deleteTag(value)}
            onInput={(e) => this.inputHandler(e)}
            onSubmit={() => this.submitHandler()}
          />
          <FlatList
            data={this.state.tags}
            renderItem={this.renderItem}
            keyExtractor={(item) => this.state.tags.indexOf(item).toString()}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          />
          <StoreProducts />
        </Layout>
      </>
    );
  }
}

export default Store;
