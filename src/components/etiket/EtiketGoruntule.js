import {
    YteFormElement,
    YteViewComponent,
    YteForm,
    getTargetPathValue
} from "yte-react-core";
import {Component} from 'react';

class EtiketGoruntule extends Component {

    render() {
        return <YteViewComponent location={this.props.location} history={this.props.history}
                                 getItemParams={this.props.getItemParams} target={this} getUrl={"/etiket/get"}>
            <YteForm>
                <YteFormElement sectionId={5} labelId="etiket.ad" label="etiket.ad">
                    {getTargetPathValue(this, "state.item.ad")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="etiket.olusturulmaTarihi" label="etiket.olusturulmaTarihi">
                    {getTargetPathValue(this, "state.item.olusturulmaTarihi")}
                </YteFormElement>
            </YteForm>
        </YteViewComponent>
    }

}

export default EtiketGoruntule;