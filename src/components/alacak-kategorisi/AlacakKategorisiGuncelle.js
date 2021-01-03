import {Component} from 'react';
import {
    getTargetPathValue, handleRemoteCall,
    handleTargetPathValueChange, YteCheckboxInput, YteEnumInput, YteForm,
    YteFormElement, YteMoneyInput, YteNumberInput, YteSelectInput,
    YteTextInput,
    YteUpdateComponent,
    YteValidator
} from "yte-react-core";

class AlacakKategorisiGuncelle extends Component {

    render() {
        return <YteValidator target={this}>
            {
                ({error, hasError}) => {
                    return <YteUpdateComponent history={this.props.history} confirmDisabled={hasError} location={this.props.location} getItemParams={this.props.getItemParams}
                                               target={this} getUrl={"/tahakkukTuru/get"} updateUrl={"/tahakkukTuru/guncelle"}>
                        <YteForm>
                            <YteFormElement sectionId={5} labelId="tahakkuk-turu.ad" label="tahakkuk-turu.ad" error={error} errorPath="state.item.ad">
                                <YteTextInput value={getTargetPathValue(this, "state.item.ad")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.ad",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={5} labelId="tahakkuk-turu.aciklama" label="tahakkuk-turu.aciklama" error={error} errorPath="state.item.aciklama">
                                <YteTextInput value={getTargetPathValue(this, "state.item.aciklama")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.aciklama",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={5} labelId="tahakkuk-turu.alacakKategorisi" label="tahakkuk-turu.alacakKategorisi" error={error} errorPath="state.item.alacakKategorisiId">
                                <YteSelectInput displayProperty="ad" valueProperty="id"
                                                value={getTargetPathValue(this, "state.item.alacakKategorisiId")}
                                                onChange={newValue => handleTargetPathValueChange({target:this, path:"item.alacakKategorisiId",value: newValue})}
                                                options={this.state.alacakKategorisiOptions}/>
                            </YteFormElement>
                            <YteFormElement sectionId={5} labelId="tahakkuk-turu.oncelik" label="tahakkuk-turu.oncelik" error={error} errorPath="state.item.oncelik">
                                <YteNumberInput value={getTargetPathValue(this, "state.item.oncelik")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.oncelik",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={5} labelId="tahakkuk-turu.maxTaksitYili" label="tahakkuk-turu.maxTaksitYili" error={error} errorPath="state.item.maxTaksitYili">
                                <YteNumberInput value={getTargetPathValue(this, "state.item.maxTaksitYili")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.maxTaksitYili",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={5} labelId="tahakkuk-turu.gelirIdaresineBildirmeSuresi" label="tahakkuk-turu.gelirIdaresineBildirmeSuresi" error={error} errorPath="state.item.gelirIdaresineBildirmeSuresi">
                                <YteNumberInput value={getTargetPathValue(this, "state.item.gelirIdaresineBildirmeSuresi")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.gelirIdaresineBildirmeSuresi",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={6} labelId="tahakkuk-turu.olusturulacakTahakkukTipi" label="tahakkuk-turu.olusturulacakTahakkukTipi" error={error} errorPath="state.item.olusturulacakTahakkukTipi">
                                <YteEnumInput enumName="OlusturulacakTahakkukTipi" value={getTargetPathValue(this, "state.item.olusturulacakTahakkukTipi")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.olusturulacakTahakkukTipi",value: newValue})}/>
                            </YteFormElement>
                            <YteFormElement sectionId={6} labelId="tahakkuk-turu.sayistayIlamiTuruMu" label="tahakkuk-turu.sayistayIlamiTuruMu"  >
                                <YteCheckboxInput value={getTargetPathValue(this, "state.item.sayistayIlamiTuruMu")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.sayistayIlamiTuruMu",value: newValue})} />
                            </YteFormElement>
                            <YteFormElement sectionId={6} labelId="tahakkuk-turu.kismenKapatilabilirMi" label="tahakkuk-turu.kismenKapatilabilirMi"  >
                                <YteCheckboxInput value={getTargetPathValue(this, "state.item.kismenKapatilabilirMi")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.kismenKapatilabilirMi",value: newValue})} />
                            </YteFormElement>
                            <YteFormElement sectionId={6} labelId="tahakkuk-turu.kismenTaksitKapatilabilirMi" label="tahakkuk-turu.kismenTaksitKapatilabilirMi"  >
                                <YteCheckboxInput value={getTargetPathValue(this, "state.item.kismenTaksitKapatilabilirMi")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.kismenTaksitKapatilabilirMi",value: newValue})} />
                            </YteFormElement>
                            <YteFormElement sectionId={6} labelId="tahakkuk-turu.etahsilatYapilabilirMi" label="tahakkuk-turu.etahsilatYapilabilirMi"  >
                                <YteCheckboxInput value={getTargetPathValue(this, "state.item.etahsilatYapilabilirMi")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.etahsilatYapilabilirMi",value: newValue})} />
                            </YteFormElement>
                            <YteFormElement sectionId={6} labelId="tahakkuk-turu.pesinatliMi" label="tahakkuk-turu.pesinatliMi"  >
                                <YteCheckboxInput value={getTargetPathValue(this, "state.item.pesinatliMi")} onChange={newValue => handleTargetPathValueChange({target:this, path:"item.pesinatliMi",value: newValue})} />
                            </YteFormElement>
                        </YteForm>
                    </YteUpdateComponent>
                }
            }
        </YteValidator>
    }
}

export default AlacakKategorisiGuncelle;