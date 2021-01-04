import {Component} from 'react';
import {
    YteAddComponent,
    YteValidator,
    YteForm,
    YteFormElement,
    YteTextInput,
    getTargetPathValue,
    handleTargetPathValueChange
} from "yte-react-core";

class EtiketEkle extends Component {
    
    validations = {
        "state.item.ad": {presence: true, length: {le: 256, ge: 1}},
    }

    render() {
        return <YteValidator target={this}>
            {
                ({error, hasError}) => {
                    return <YteAddComponent location={this.props.location} history={this.props.history} confirmDisabled={hasError} target={this} addUrl={"/ekle"} >
                        <YteForm>
                            <YteFormElement sectionId={5} labelId="etiket.ad" label="etiket.ad" error={error} errorPath="state.item.ad">
                                <YteTextInput value={getTargetPathValue(this, "state.item.ad")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.ad",value: newValue})}/>
                            </YteFormElement>
                        </YteForm>
                    </YteAddComponent>
                }
            }
        </YteValidator>
    }
}

export default EtiketEkle;