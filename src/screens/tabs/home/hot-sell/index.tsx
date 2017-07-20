import { PureComponent } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    Image
} from "react-native";
import { connect } from "react-redux";
import { styles } from "./style";
import { AppStore, AppNavigator, Constants } from "summer";

class RecommendGoods extends PureComponent<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        const { header = {} }: { header: any } = this.props.A3;
        const headerImageUrl:string = (header && header.image) || "";
        return (
            <View>
                <View style={ styles.title }>
                    <View style={ styles.titleLine }></View>
                    <Text> 精品热卖</Text>
                    <View style={ styles.titleLine }></View>
                </View>
                <Image
                    style={ styles.headerImage }
                    source={{ uri: headerImageUrl }}
                />
                <View style={ styles.listWrap }>
                    { this.renderList() }
                </View>
            </View>
        );
    }
    private renderList = (): any => {
        const { list = [] }: { list: any[] } = this.props.A3;
        (list.length > 6) && (list.length = 6);
        return list.map((item: any, index: number) => (
            <TouchableWithoutFeedback
                key={ index }
                onPress={ () => this.navToGoodsPage(item.goods_id) }
            >
                <Image
                    style={ styles.listImage }
                    source={{ uri: item.image }}
                />
            </TouchableWithoutFeedback>
        ));
    }
    navToGoodsPage = (goods_id: string) => {
        /** TODO go to goods page with goods_id */
        AppStore.dispatch({
            type: Constants.ACTIONTYPES_LOGGED_OUT,
            meta: {

            }
        } as any);
    }
}


const mapStateToProps = (state: any) => ({
    user: state.get("user").toJS()
});


export default connect(mapStateToProps)(RecommendGoods);