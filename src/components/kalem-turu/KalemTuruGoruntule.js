import {
    YteFormElement,
    YteViewComponent,
    YteForm,
    getTargetPathValue,
    enumDisplay,
    formatBoolean
} from "yte-react-core";
import {Component} from 'react';

class KalemTuruGoruntule extends Component {

    render() {
        return <YteViewComponent location={this.props.location} history={this.props.history}
                                 getItemParams={this.props.getItemParams} target={this} getUrl={"/kalemTuru/get"}>
            <YteForm>
                <YteFormElement sectionId={5} labelId="kalem-turu.tahakkukTuru" label="kalem-turu.tahakkukTuru">
                    {getTargetPathValue(this, "state.item.tahakkukTuruId")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.id" label="kalem-turu.id">
                    {getTargetPathValue(this, "state.item.id")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.ad" label="kalem-turu.ad">
                    {getTargetPathValue(this, "state.item.ad")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.kurumHesapPlaniTipi" label="kalem-turu.kurumHesapPlaniTipi">
                    {enumDisplay("KurumHesapPlaniTipi", getTargetPathValue(this, "state.item.kurumHesapPlaniTipi"))}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.kurumHesapPlani" label="kalem-turu.kurumHesapPlani">
                    {getTargetPathValue(this, "state.item.kurumHesapPlaniId")}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.emanetDurumu" label="kalem-turu.emanetDurumu">
                    {enumDisplay("EmanetDurumu", getTargetPathValue(this, "state.item.emanetDurumu"))}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.takipMi" label="kalem-turu.takipMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.takipMi"))}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.muhasebeKaydiAtilirMi" label="kalem-turu.muhasebeKaydiAtilirMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.muhasebeKaydiAtilirMi"))}
                </YteFormElement>
                <YteFormElement sectionId={5} labelId="kalem-turu.kdvliMi" label="kalem-turu.kdvliMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.kdvliMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.surekliMi" label="kalem-turu.surekliMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.surekliMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.indirimGirilsinMi" label="kalem-turu.indirimGirilsinMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.indirimGirilsinMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.baskasiAdinaTakipMi" label="kalem-turu.baskasiAdinaTakipMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.baskasiAdinaTakipMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.butceyeGelirMi" label="kalem-turu.butceyeGelirMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.butceyeGelirMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.uzunVadeMi" label="kalem-turu.uzunVadeMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.uzunVadeMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.butceyeGelirFaiziAtilsinMi" label="kalem-turu.butceyeGelirFaiziAtilsinMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.butceyeGelirFaiziAtilsinMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.olusturulacakTahakkukKalemiTipi" label="kalem-turu.olusturulacakTahakkukKalemiTipi">
                    {enumDisplay("OlusturulacakTahakkukKalemiTipi", getTargetPathValue(this, "state.item.olusturulacakTahakkukKalemiTipi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.faizEmaneteAlinsinMi" label="kalem-turu.faizEmaneteAlinsinMi">
                    {formatBoolean(getTargetPathValue(this, "state.item.faizEmaneteAlinsinMi"))}
                </YteFormElement>
                <YteFormElement sectionId={6} labelId="kalem-turu.odemeKartTipi" label="kalem-turu.odemeKartTipi">
                    {enumDisplay("OdemeKartTipi", getTargetPathValue(this, "state.item.odemeKartTipi"))}
                </YteFormElement>
            </YteForm>
        </YteViewComponent>
    }

}

export default KalemTuruGoruntule;