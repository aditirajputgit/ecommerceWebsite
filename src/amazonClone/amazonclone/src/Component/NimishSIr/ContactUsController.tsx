import React, { Component } from "react";
import axios from "axios";
export interface Props {}

export interface S {
  countryCode: string;
  countryListData: Array<countryItem>;
}
export interface countryItem {
  country_name: string;
  country_code: string;
  country_flag: string;
  short_name: string;
  number_lengths: Array<number>;
}

export default class ContactUsController extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      countryCode: "asdfasdf",
      countryListData: [],
    };
  }
  componentDidMount(): void {
    this.getAllCountry();
  }

  getAllCountry = () => {
    axios
      .get(
        "https://abduelahcoaching-272249-ruby.b272249.dev.eastus.az.svc.builder.cafe/account_block/accounts/countries_list"
      )
      .then((response) => {
        this.setState({
          countryListData: response.data.countries,
          //   countryCode: `${response.data.countries[0].country_flag} ${response.data.countries[0].short_name}`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
