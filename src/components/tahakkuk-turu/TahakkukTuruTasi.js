import {Component} from 'react';
import {
    YteAddComponent,
    YteValidator,
    YteForm,
    YteFormElement,
    YteTextInput,
    getTargetPathValue,
    handleTargetPathValueChange, YteSelectInput, YteNumberInput, YteEnumInput, YteCheckboxInput, handleRemoteCall
} from "yte-react-core";

class TahakkukTuruTasi extends Component {

    state = {
        tahakkukTuruOptions: []
    }

    validations = {
        "state.item.alacakKategorisiId": {presence: true},
        "state.item.aciklama": {presence: true, length: {le: 1024, mgein: 1}}
    }

    componentDidMount() {
        handleRemoteCall({
            method: "get",
            targetUrl: "/tahakkukTuru/getAll",
            afterOperationSucceeded: (data) => {
                console.log(data);
                this.setState({tahakkukTuruOptions: data});
            }
        });
    }

    render() {
        return <YteValidator target={this}>{({error, hasError}) => {
                    return <YteForm>
                            <YteFormElement sectionId={1} labelId="tahakkuk-turu.ad" label="tahakkuk-turu.tasi.tahakkukTuru" error={error} errorPath="state.item.tahakkukTuruId">
                                <YteSelectInput displayProperty="ad" valueProperty="id"
                                                value={getTargetPathValue(this, "state.item.tahakkukTuruId")}
                                                onChange={newValue => handleTargetPathValueChange({target:this, path:"item.tahakkukTuruId",value: newValue})}
                                                options={this.state.tahakkukTuruOptions}/>
                            </YteFormElement>
                            <YteFormElement sectionId={1} labelId="tahakkuk-turu.aciklama" label="tahakkuk-turu.aciklama" error={error} errorPath="state.item.aciklama">
                                <YteTextInput value={getTargetPathValue(this, "state.item.aciklama")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.aciklama",value: newValue})}/>
                            </YteFormElement>
                        </YteForm>
                }
            }
        </YteValidator>
    }
}

export default TahakkukTuruTasi;