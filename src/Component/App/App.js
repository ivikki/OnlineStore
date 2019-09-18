import React from "react";
import { AppContext } from "../../Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../Home";
import { Admin } from "../Admin";
import { AddCard } from "../AddCard";
import { EditCard } from "../EditCard";
import { Product } from "../Product";

export class App extends React.Component {
  state = {
    products: [
      {
        id: 111,
        name: "Iphone",
        price: 500,
        url:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1550795431127",
        quantity: 25,
        status: "NOT in Stock"
      },
      {
        id: 222,
        name: "Samsung",
        price: 300,
        url:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQEBAQDRAPDw8PDw8PDw8PDxAPFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGy8fHR0tLS0tKysrLS0tLS0tKy0tLS0tLy0tLSsrLS0tKy0rLS0tKystLSstLS0vLSstLTUtK//AABEIAPMAzwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xABPEAABAgMCBgsMCAQEBwAAAAABAAIDBBEhMQUHEkFRcQYTUmFzdIGRksTRFRYXIiM0NVNUcpOzFDIzobGywcIlQrThJILS8URiY3WDpOL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/8QAJxEBAQACAAUEAQUBAAAAAAAAAAECEQMEEiExExQjUUEiMjNhkXH/2gAMAwEAAhEDEQA/AL3jB2bdzm7XCaIkcty3F31ITNJ0k5gspiY3p51tTyOAH5V3ca0LxcIxTa4zEOCN5jIDXU53FZAxtg1BBfTjbn907pjsR+Fyf3TumOxUAhCiC/8Ahbn907pjsQ8Lk/undMdioFEdEF/8Lc/undMdiHhbn907pj/SqBRCiC/eFuf3TumOxDwtT+6d0x2Kg0QQX7wtT+6d0x2JcDGphGI5rGF7nPIa0BwtJ5Fn1F3tgkMOwjKtIqDENQc7ck1HNUcqaFsncZ2EIb9qbt0aI0ePkuAY08jTXlUc4z8MeqdyuKgz8KkR+kucXHS4k1KiFhXSw5Ga71G3Y8J+F/VHpHtR+FDC/qj0j2rjBlUCxW9hj91HU7PhQwv6o9I9qAxn4XJtY5tmap/Vcba0RYl5HH7qOp3PCdhXcu5j/qQOM/CtLGu5v/pcAsSS1UvJY/dOp3hjRwv6s857UPClhf1Z6R7VXyESpeUn2tKsPhSwv6s857UPCnhb1Z51XaJiaiFgFMkFzg0Od9VtlanmVMuXxxm7UrZBxt4Uhmr4LnNz21AGqh/Fa/sC2YNwpByi0w4gFXNzOGkLzpLvdVzX0ymhpq26jhWh0G1atijOSYdLMqLFadRgl34sqssuFOnqgi41vN8Icd6uxY424alseNbzfCHHersWONuGpYgkSBRtaTcCeRASNL2l+5dzFDaXbk8yBCCXtD9y7mKG0u3J5kCEEvaXbk8yG0v3J5kCFYsXvpOV99/y3LgGE7O08y7+Lz0nK++78jlM8jtYRZ5R+sqNkLrT8Pyjs9pUUwl9Dj4UqEYSAYpm0pJlypVqLtdEkhSDDIRFqbV2iOCQ5ilmEkmGq2J2iZCSWKUYaSYazsWlRMlJiQg4UIqDmKlliTkKlxW2iw4LWijQGj8Vp+KkWwuGd/TxFnJYtKxXChhcM/8Ap3rz8xjrh3SUHGt5vP8AHersWNtuGpa7jMcTK4QJt/x8Qc0MAfcFkLbhqXNSXCZlOa3dOa3nNFFnTWI8C4PcGjQAaBSYT8lzXX5LmupqNVGmQdse4CoL3OBpWwmqBiJCLbxTeIokhqfmYz4pynAk0A+rmFyba0jMeYoA6CReOcJFFKmJl72sYW0awENAbS81J3yo+SdB5igcjSrmUym0qMoXWhdDAexuYnhEdAa2kOgcXuyRU3NG+oDojiKZJ5iungDZDNSIiCBk0iUyg+HlUIFARvqM96/ST+xyuCIe0RXRHPZGhuiNDRSgLLCCu3i6FZ2RfnMWI079GGi4MLCp2uI1zXufEdEcSGihc81JPKu5i5fSekGZxFiOPK00CtPwLjPQ/KP1lRzCXVnmeUdrP4qI9mhd6XsqiZCbdDIU7IQsuNqnatjnEFE5u8p5aNCSWBTKo57oaac1T4kK1NmGpQgFiLIUx0JIMJRYmVEMNEYalZCLIVNLbRDDWh4sxR0Hhn/071RXMV52BRNr2g0r5d4/9eIvNzU+OrRx8ZJ/wmEP+4RvyBZE24alsmNYUl5/jvV2LG2XDUuUuCFUSJAvKOkoZR0lIQQLyjpQyjpPOkIIF5R0lFlHSUmqCBWUdKsWLw/xOU4Q/kcq2rHi79JyfCn8pUzyNQwhA8d2sqA6CQu/OwPGOtQIsBdjHLso5Rai2sFS3w01krSUpkQ0l0JSKJY1VU7VsRMlNRIWhT3whmTToanalc50NNmGp74aZexSImQklilliQWqEyomQrjsRFPo/Dv/AKaIqtkK57C4Ae6ADUeViEU07Q/+68/Nfx1fHy42Nfzef471dixllw1LZsa/m8/x3q7FjDLhqXIaAUVUCiQHVHVJQQKqhVJQQKqhVJQQHVWTF16Uk+FP5Sq0rJi6P8Uk+EP5SpnkbXNN8Z2tRHsU6YPjHWmnNqulKrpzI0HQor4a6sRqjRG1WkogZCXtSeMJKhiittWwxtabdDXR2qtyafBUzJWoBhV30y6EpzmJp7aq8yV0gOam3MU18NNFittMiI6GrjsIHlJfhInyHqrOarXsNFIkvwkT5D15uavx1pjFexr+bz/HersWMMuC2bGv5vP8d6uxYw24alyVxIIFEgWxtSBdUgVNydEsauFR4oGY21zJhpoai8Jz6Q7TozDNd+KBwSppWo+rlZ9FaJJlrrRa0u5hVJ291KVzUuF1KI/pDrLRZZcNFLUC/ohttFhoea9NxIWSAa30sobKiqMTDtN9cwz/AOyQ6K4gA3DeCBKseLr0pJ8IfylVtWPF36Uk+FP5SpnkbbM/WOtMgqTMDxjrTRYujL2WuJD7Uw4KQWpt4VpVdIrmpNFILU2QrbNEtcRcl7ebjbyJNERClHSJ9Ew8J4tSCFMp0o5FUy5iluamnq0p0ojmq07Eh5WX4SL8h6rharNsWHlZbhIvyHrHmb8dTpVsbHm8/wAd6uxYw24als+Nj7DCHHersWLtuC5YBRVQKJAdUESFUB1QqiQQHVBEggNWPF36Uk+F/aVW1Y8XZ/icnwv7SpnkbdHf451oB6jzL/HOsomvXv8Aw9dwTLCmIrUTXpYIKmMrijlJIUowExEaQrSmjLgklLckFWR0iSXBKqiKk0YeU05PPTRCtEE0Vk2Mjyst78X5DlW1ZNjX2sr78X5DljzP7EXwqmNfzfCHHersWLNuC2nGx5vhDjvV2LFm3DkXNUEUECiqgNBEggCNEggNBEggNWLF36Uk+F/aVXFZMXXpST4X9pUzyNlnG+O7Wo4fRdnDEmbYjLQDauKSDvL3Y3cdKTcLEREYlM6VCly6xptTMxCdDNHCmg5leWK3GJcKZOlLixqrnsN2fUpAGa46FB6QnOTRKkiAToqg2SreanQp6or6aJeidVTnShFws+9NPl1MziLw4huKSU9El3NtoaJgq8u1bgJWHY19tLe/F+Q9V8BWLY39tK8JF+Q9Y8x+xTPHWKp42PN8Icd6uxYs24LacbHm+EOO9XYsVbcFz3nApKMokBokEEAqjRIIAgggEBqyYuvSknwv6FVtWLF36TlOF/QqYPR8vEaXEXh1ahVXCErtcZ7BcHWajaF18rJiO0VCewlg4ve19CQ5oqWitwv/AB+5enG9NdCfpv8A1w4Dsk1XZlAyK0bYGkDSKrjxoO1uyXnJF7XAVa5ukFJ7pNbY2uSNN5V8pudmlw6vC3wIEvSxg0XCvIuPsiwa2HEhPgDJDw4vJtYKAW834KNI4Ta6+3WQ1rRpJXcDhHYyECTlmpNHU2qtrgSBZSo5Vj+rDLuy1lw8t1AwbgiNHaHl20wjTIoDlvANjgMwK6MbBMRgBbGeSL8sNIIXWmJ2HCAaBUgUDG5h+igvwjEd/K0DRSpVLnlWUzzy7/hAitfna06lH+jm+gU+PN1vaAd5QIkYpLWuO6YjNpe2m/RcedgitQu2I1bDcoczL0tFoWuGXTWkn24ohrvbH20jSvvxvkOUEsoungf7eV9+N8lyvxct4s+PjrBTcbHm+EOOdXYsVbcFtWNfzfCHHersWKtuC8bwCKSlFJQBBBBAEEaJAEYKJGEBqxYvPScpwv6FV1WLF96TlOF/aVMG/RJdznHJ+/8ABdaT2xjfHblNBzAkjfstp+Cjy8E5RrdW5dFryM/OaK+eT253fZBj4ObHqA1kSE45Ra4kFrjeWOFrTvXKs4U2ORQ4iCA9tKhrngRKaM1SrsyLSpqANG/rCadNQ3WGGIlDUAi0O0ityjHi5Y+DDiZ4XsoGDsHPMbaozXwg0F0QGoc4ClGN1lzRUaVfoPkWn+VxAG9DhAeKxoUbC8s6KxhgkMjQHBzcrxvFqCWGtoFgPIuXDnnOaXRiGvy4ocwWknLNK7wGSP8AKr55Xid2l3xrLf8AHRfGAturyqLEnswXLmJ4urbYkQ44F5ScP7bzgand0TMVTT31Ub6QEYfVT0p9PRwG1LdWlE002o3RRljUq1HT3NPbRT8FDy8p78b5LlEdQWlS8FxA6YlKZnxvkuS3cZczPjql42PN8Icd6uxYq24Lasa/2GEOO9XYsVZcNSycwRSUopKAIIIIDRI0SAJSII0AVixe+k5Thf0KrqsWL70nKcJ+hUwj0FMzxa40UR0+83mxNzUTxjrUSI5emYx2MeHHQbO3CtVM7p0pQKuOiIocU1UXhSr3gyrJ9IqQW/W/kJGbOyptouNhhwY9xrVjjl1zQ3ONrXbxdW3fUiWdlAA2aDnB0rl4SD9tAfUl14ZblsDy02G+1hPInDx1UY49N7IkSNRIbGSZpgBABymkVa67KabjvasyZBXokj2Tumw4tV0IESq5EErowRS2ldA0nsVMlconPeG3nMf7JTINznWZ6aFCl4wHjRAIj61bWxrT7orcFJc50T+YAaBVYXFj0os3FLyaXBdTALaR5X343yHKPtQU7BTKTEp78b5Lkys6WPOWejpTMa/m+EOO9XYsVbcFteNfzfCHHersWKNuCwccRSUookBII0EARI0EACNBGgCsGL/0lKcJ+hVforDsA9JSnCfoVMTGzzROUdaZJUqYZ4x1praK32L2R3JeyNEKflIDn2igG6caDk0o2wG1zv01OS3tPIpDn01gUDWigA0AZktW39HxkQx4zyD/AMlAOcg1+5R4zoZIe6E+IKg5QjW2XEVaaciYMFz7XeKBpSRU2NNgqBW6mhUR6cvlELYb3PGWMlpJhklsJzWk2tIpQkaBTkSImD88OJDjAX0OSRzo40tWymVvkGhO8c6ZbKAGyrCRS+hI0CoFnKtZ/VazG4+KlQJQD67g3SLHHkoUzMzZedrhhzW3XUc7sU4vGRkuhxOaOR8zJSJdlPqsA33EFx5rBqCjf5Jcrd5I8tg52f8AVS21YRStmZSfKZiOQonB5vAVMsrVurfkkxl0sEOrMSnvxvkuXNZBtqa6guvg7ziTsoMqNQf+Fyzy8PJzuvSqlY1/sMIcd6uxYoy4alteNfzfCHHersWKsuCwcUkoURlBAVEEaOiAqIUR0R0QFRCiNBASsOwD0lKcJ+ir6sOwD0lKcJ+hUwbfMkZR1qM5xuUqYbVx1qOYa9cdqeCNrNnOE5DrW6iW4XDRnRiv+yVaUmKzKvu0JDWNaLuRPhMTYuP9lTS8pt4AFCAK3NFtBpO+g1ozig3JtH32ImW32p9rLNfKp8L70jPgi8Cg0NNBzIQ2DSVKdCrm5jQomspn5702nqG2CDmPOnWMoiZrToVVdltYpMmKTMn70b5LkwwqRK+cyfvRvkuVcvDx83fjqjY1vN8Icd6uxYqy5bXjW83whx3q7FizLgsXKJQR0QQFRGgjogJBHRGgII6IURoCorBsBH8SleE/aVwFYNgPpKU4T9pUwjb431jrTaeijxjrSclep2p4IARkJVERUJ2TVCIzKGblQASm1RaVFyaf2TjHWJ+I3Qksao2tsaMEf7hAhKDab6hJBajtzJdEoMQ2S2xS5I/4mU96N8lyYydSkSYpMynvRvkvVcvDy83/AB1RcasQGDhFtxbONNN4y7KH7isaZcNS3zG9sZjvESZgMMVkVjYczDYKuaW1yIoGcW0KxAYFmRYIL3U0NJWLkoSFFL7kTN20RK+6UruNNeoi9AoIVEamDA016iL0CjOB5r1EXolBCojopncea9RF6JQ7kTXqInRKCHRCimdyJr1EXolDuRNezxeiUERdzYQ7JwhKn/qAc9i5xwTNeoi9Ep+SkpqDEZEECL4jg76pFmdBuclOtmGNiMIcHC2l7XXFp3waim8pAWIxouEIEZ0WUMaEI1XkMFAXHSwileROHZLhwXujDXCaPxC2nEj3Y81jrvG1I6LFO+fDu7jfCb2IDZRh3dRvhN7FPqRb3eH02zJR5KxTvpw9u43wmdiHfPh7dxvhM7FHqQ93j9NsyClZCxLvow9u43wmdiLvpw9u43wmdidcT7vFuIhBHtaw7vqw9u43wmdiHfZh7dxvhM7FHWe8xbjtdEVFh/fbh7dxvgs7ER2WYe3cb4TOxR1p95j9NxATWCZ5kafhQ4bg76O6KIhBsD9pNW6xlNrrWHzOHcORm5DokwA6yjWCGTqIFeYrZMTmxeNKS+3TDch7wRDYfrAOoXPdvmgUXLbDj8xM50yNJooUbA8s81dAhOOksaggqPIa735P2aD8NqPuBJ+zQfhtQQQDuBKezQfhtQ7gSns0HoNQQUBbMCyrbpeEP8jUruRLeohdBqCCkNdwJT2aD8NqHcCT9mg/DagggXDwNLNrkwIQrfRjUg4Ak/ZoPw2oIIC73pKw/RYFl3k22akk7G5I2/RYPw2oIIANjcl7LB+GEDsckj/wsH4bUEEA725L2WD0Ai72pH2WD0AjQUAd7cl7LB6ARd7Uj7LB6ARoKQXe1I+ywegEO9qR9lg9AI0FALvakfZYPQCHe1I+ywfhhGgpD8tgaWhGsOBCYdIY2qm0QQQf/9k=",
        quantity: 53,
        status: "in Stock"
      },
      {
        id: 333,
        name: "Meizu",
        price: 200,
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQZw9-IAQ1F7FlzljFsh2nJfQzQkFMk47YjCEwRE5Vzq7OVUv",
        quantity: 153,
        status: "in Stock"
      },
      {
        id: 444,
        name: "Xiomi",
        price: 250,
        url: "https://img.mvideo.ru/Pdb/30043457b.jpg",
        quantity: 0,
        status: "NOT in Stock"
      }
    ]
  };

  addCard = product => {
    let products = this.state.products.slice();
    let element = this.state.products.find(el => el.id === product.id);
    if (!element) {
      products.push(product);
    } else {
      alert(
        "It is not possible to add a product. \nProduct with that ID already exists"
      );
    }

    this.setState({
      products
    });
  };

  removeCard = id => {
    let products = this.state.products.filter(el => el.id !== id);
    this.setState({
      products
    });
  };

  editCard = product => {
    let products = this.state.products.slice();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        var index = i;
      }
    }

    products.splice(index, 1, product);

    this.setState({
      products
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          addCard: this.addCard,
          removeCard: this.removeCard,
          editCard: this.editCard
        }}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={Admin} />
          {console.log(this.state.products)}
          <Route path="/admin/add" component={AddCard} />
          <Route path="/admin/edit/:id" component={EditCard} />
          <Route path="/product/:id" component={Product} />
        </Router>
      </AppContext.Provider>
    );
  }
}
