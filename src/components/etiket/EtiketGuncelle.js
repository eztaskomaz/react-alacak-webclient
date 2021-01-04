import {Component} from 'react';
import {
    getTargetPathValue,
    handleTargetPathValueChange, YteForm,
    YteFormElement,
    YteTextInput,
    YteUpdateComponent,
    YteValidator
} from "yte-react-core";

class EtiketGuncelle extends Component {

    validations = {
        "state.item.ad": {presence: true, length: {le: 256, ge: 1}}
    }

    render() {
        return <YteValidator target={this}>
            {
                ({error, hasError}) => {
                    return <YteUpdateComponent history={this.props.history} confirmDisabled={hasError} location={this.props.location} getItemParams={this.props.getItemParams}
                                               target={this} getUrl={"/etiket/get"} updateUrl={"/etiket/guncelle"}>
                        <YteForm>
                            <YteFormElement sectionId={5} labelId="etiket.ad" label="etiket.ad" error={error} errorPath="state.item.ad">
                                <YteTextInput value={getTargetPathValue(this, "state.item.ad")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.ad",value: newValue})}/>
                            </YteFormElement>
                        </YteForm>
                    </YteUpdateComponent>
                }
            }
        </YteValidator>
    }
}

export default EtiketGuncelle;