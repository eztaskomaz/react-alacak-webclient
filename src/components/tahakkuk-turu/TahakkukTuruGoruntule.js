import {
    YteFormElement,
    YteViewComponent,
    YteForm,
    getTargetPathValue,
    enumDisplay,
    formatBoolean
} from "yte-react-core";
import {Component} from 'react';

class TahakkukTuruGoruntule extends Component {

    render() {
        return <YteViewComponent location={this.props.location} history={this.props.history}
                                 getItemParams={this.props.getItemParams} target={this} getUrl={"/tahakkukTuru/get"}>
            <YteForm>
                <YteFormElement sectionId={5} labelId="tahakkuk-turu.id" label="tahakkuk-turu.id">
                    {getTargetPathValue(this, "state.item.id")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="tahakkuk-turu.ad" label="tahakkuk-turu.ad">
                    {getTargetPathValue(this, "state.item.ad")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="tahakkuk-turu.aciklama" label="tahakkuk-turu.aciklama">
                    {getTargetPathValue(this, "state.item.aciklama")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="tahakkuk-turu.alacakKategorisiId" label="tahakkuk-turu.alacakKategorisiId">
                    {getTargetPathValue(this, "state.item.alacakKategorisiId")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="tahakkuk-turu.oncelik" label="tahakkuk-turu.oncelik">
                    {getTargetPathValue(this, "state.item.oncelik")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="tahakkuk-turu.maxTaksitYili" label="tahakkuk-turu.maxTaksitYili">
                    {getTargetPathValue(this, "state.item.maxTaksitYili")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="tahakkuk-turu.gelirIdaresineBildirmeSuresi" label="tahakkuk-turu.gelirIdaresineBildirmeSuresi">
                    {getTargetPathValue(this, "state.item.gelirIdaresineBildirmeSuresi")}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="tahakkuk-turu.olusturulacakTahakkukTipi" label="tahakkuk-turu.olusturulacakTahakkukTipi">
                    {enumDisplay("OlusturulacakTahakkukTipi", getTargetPathValue(this, "state.item.olusturulacakTahakkukTipi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="tahakkuk-turu.sayistayIlamiTuruMu" label="tahakkuk-turu.sayistayIlamiTuruMu">
                    {formatBoolean(getTargetPathValue(this, "state.item.sayistayIlamiTuruMu"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="tahakkuk-turu.kismenKapatilabilirMi" label="tahakkuk-turu.kismenKapatilabilirMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.kismenKapatilabilirMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="tahakkuk-turu.kismenTaksitKapatilabilirMi" label="tahakkuk-turu.kismenTaksitKapatilabilirMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.kismenTaksitKapatilabilirMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="tahakkuk-turu.etahsilatYapilabilirMi" label="tahakkuk-turu.etahsilatYapilabilirMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.etahsilatYapilabilirMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="tahakkuk-turu.pesinatliMi" label="tahakkuk-turu.pesinatliMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.pesinatliMi"))}
                </YteFormElement>
            </YteForm>
        </YteViewComponent>
    }

}

export default TahakkukTuruGoruntule;