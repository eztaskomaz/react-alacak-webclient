import {YteFormElement, YteViewComponent, YteForm, getTargetPathValue} from "yte-react-core";
import {Component} from 'react';

class KalemTuruGoruntule extends Component {

    render() {

        return <YteViewComponent location={this.props.location} history={this.props.history}
                                 getItemParams={this.props.getItemParams} target={this} getUrl={"/tahakkuk-turu/get"}>
            <YteForm>
                <YteFormElement sectionId={5} labelId="idLabel" label="ID">
                    {getTargetPathValue(this, "state.item.id")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="nameLabel" label="tahakkuk-turu.name">
                    {getTargetPathValue(this, "state.item.name")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="sellerLabel" label="tahakkuk-turu.seller">
                    {getTargetPathValue(this, "state.item.seller")}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="priceLabel" label="tahakkuk-turu.price">
                    {getTargetPathValue(this, "state.item.price.amount")}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="remainingCountLabel" label="tahakkuk-turu.remainingCount">
                    {getTargetPathValue(this, "state.item.remainingCount")}
                </YteFormElement>
            </YteForm>
        </YteViewComponent>
    }

}

export default KalemTuruGoruntule;