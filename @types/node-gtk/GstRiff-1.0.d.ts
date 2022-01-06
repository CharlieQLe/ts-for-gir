/**
 * GstRiff-1.0
 */

import "node"
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstRiff {

export const RIFF_IBM_FORMAT_ADPCM: number
export const RIFF_IBM_FORMAT_ALAW: number
export const RIFF_IBM_FORMAT_MULAW: number
export const RIFF_IF_COMPUSE: number
export const RIFF_IF_KEYFRAME: number
export const RIFF_IF_LIST: number
export const RIFF_IF_NO_TIME: number
export const RIFF_STRH_DISABLED: number
export const RIFF_STRH_VIDEOPALCHANGES: number
export const RIFF_WAVE_FORMAT_A52: number
export const RIFF_WAVE_FORMAT_AAC: number
export const RIFF_WAVE_FORMAT_AAC_AC: number
export const RIFF_WAVE_FORMAT_AAC_pm: number
export const RIFF_WAVE_FORMAT_ADPCM: number
export const RIFF_WAVE_FORMAT_ADPCM_G722: number
export const RIFF_WAVE_FORMAT_ADPCM_IMA_DK3: number
export const RIFF_WAVE_FORMAT_ADPCM_IMA_DK4: number
export const RIFF_WAVE_FORMAT_ADPCM_IMA_WAV: number
export const RIFF_WAVE_FORMAT_ALAW: number
export const RIFF_WAVE_FORMAT_AMR_NB: number
export const RIFF_WAVE_FORMAT_AMR_WB: number
export const RIFF_WAVE_FORMAT_ANTEX_ADPCME: number
export const RIFF_WAVE_FORMAT_APTX: number
export const RIFF_WAVE_FORMAT_AUDIOFILE_AF10: number
export const RIFF_WAVE_FORMAT_AUDIOFILE_AF36: number
export const RIFF_WAVE_FORMAT_BTV_DIGITAL: number
export const RIFF_WAVE_FORMAT_CANOPUS_ATRAC: number
export const RIFF_WAVE_FORMAT_CIRRUS: number
export const RIFF_WAVE_FORMAT_CONTROL_RES_CR10: number
export const RIFF_WAVE_FORMAT_CONTROL_RES_VQLPC: number
export const RIFF_WAVE_FORMAT_CREATIVE_ADPCM: number
export const RIFF_WAVE_FORMAT_CREATIVE_FASTSPEECH10: number
export const RIFF_WAVE_FORMAT_CREATIVE_FASTSPEECH8: number
export const RIFF_WAVE_FORMAT_CS2: number
export const RIFF_WAVE_FORMAT_CS_IMAADPCM: number
export const RIFF_WAVE_FORMAT_CU_CODEC: number
export const RIFF_WAVE_FORMAT_DF_G726: number
export const RIFF_WAVE_FORMAT_DF_GSM610: number
export const RIFF_WAVE_FORMAT_DIALOGIC_OKI_ADPCM: number
export const RIFF_WAVE_FORMAT_DIGIADPCM: number
export const RIFF_WAVE_FORMAT_DIGIFIX: number
export const RIFF_WAVE_FORMAT_DIGIREAL: number
export const RIFF_WAVE_FORMAT_DIGISTD: number
export const RIFF_WAVE_FORMAT_DIGITAL_G723: number
export const RIFF_WAVE_FORMAT_DOLBY_AC2: number
export const RIFF_WAVE_FORMAT_DOLBY_AC3_SPDIF: number
export const RIFF_WAVE_FORMAT_DSAT_DISPLAY: number
export const RIFF_WAVE_FORMAT_DSP_TRUESPEECH: number
export const RIFF_WAVE_FORMAT_DTS: number
export const RIFF_WAVE_FORMAT_DVI_ADPCM: number
export const RIFF_WAVE_FORMAT_ECHOSC1: number
export const RIFF_WAVE_FORMAT_ECHOSC3: number
export const RIFF_WAVE_FORMAT_ESPCM: number
export const RIFF_WAVE_FORMAT_EXTENSIBLE: number
export const RIFF_WAVE_FORMAT_FLAC: number
export const RIFF_WAVE_FORMAT_FM_TOWNS_SND: number
export const RIFF_WAVE_FORMAT_G722_ADPCM: number
export const RIFF_WAVE_FORMAT_G723_ADPCM: number
export const RIFF_WAVE_FORMAT_G726ADPCM: number
export const RIFF_WAVE_FORMAT_G726_ADPCM: number
export const RIFF_WAVE_FORMAT_G728_CELP: number
export const RIFF_WAVE_FORMAT_G729A: number
export const RIFF_WAVE_FORMAT_GSM610: number
export const RIFF_WAVE_FORMAT_GSM_AMR_CBR: number
export const RIFF_WAVE_FORMAT_GSM_AMR_VBR: number
export const RIFF_WAVE_FORMAT_IBM_CVSD: number
export const RIFF_WAVE_FORMAT_IEEE_FLOAT: number
export const RIFF_WAVE_FORMAT_ILINK_VC: number
export const RIFF_WAVE_FORMAT_IMC: number
export const RIFF_WAVE_FORMAT_IPI_HSX: number
export const RIFF_WAVE_FORMAT_IPI_RPELP: number
export const RIFF_WAVE_FORMAT_ISIAUDIO: number
export const RIFF_WAVE_FORMAT_ITU_G721_ADPCM: number
export const RIFF_WAVE_FORMAT_ITU_G726_ADPCM: number
export const RIFF_WAVE_FORMAT_LH_CODEC: number
export const RIFF_WAVE_FORMAT_LRC: number
export const RIFF_WAVE_FORMAT_LUCENT_G723: number
export const RIFF_WAVE_FORMAT_MALDEN_PHONYTALK: number
export const RIFF_WAVE_FORMAT_MEDIASONIC_G723: number
export const RIFF_WAVE_FORMAT_MEDIASPACE_ADPCM: number
export const RIFF_WAVE_FORMAT_MEDIAVISION_ADPCM: number
export const RIFF_WAVE_FORMAT_MPEGL12: number
export const RIFF_WAVE_FORMAT_MPEGL3: number
export const RIFF_WAVE_FORMAT_MSG723: number
export const RIFF_WAVE_FORMAT_MSN: number
export const RIFF_WAVE_FORMAT_MSRT24: number
export const RIFF_WAVE_FORMAT_MULAW: number
export const RIFF_WAVE_FORMAT_MVI_MVI2: number
export const RIFF_WAVE_FORMAT_NMS_VBXADPCM: number
export const RIFF_WAVE_FORMAT_NORRIS: number
export const RIFF_WAVE_FORMAT_OKI_ADPCM: number
export const RIFF_WAVE_FORMAT_OLIADPCM: number
export const RIFF_WAVE_FORMAT_OLICELP: number
export const RIFF_WAVE_FORMAT_OLIGSM: number
export const RIFF_WAVE_FORMAT_OLIOPR: number
export const RIFF_WAVE_FORMAT_OLISBC: number
export const RIFF_WAVE_FORMAT_ONLIVE: number
export const RIFF_WAVE_FORMAT_PAC: number
export const RIFF_WAVE_FORMAT_PACKED: number
export const RIFF_WAVE_FORMAT_PCM: number
export const RIFF_WAVE_FORMAT_PHILIPS_LPCBB: number
export const RIFF_WAVE_FORMAT_PROSODY_1612: number
export const RIFF_WAVE_FORMAT_PROSODY_8KBPS: number
export const RIFF_WAVE_FORMAT_QDESIGN_MUSIC: number
export const RIFF_WAVE_FORMAT_QUALCOMM_HALFRATE: number
export const RIFF_WAVE_FORMAT_QUALCOMM_PUREVOICE: number
export const RIFF_WAVE_FORMAT_QUARTERDECK: number
export const RIFF_WAVE_FORMAT_RAW_SPORT: number
export const RIFF_WAVE_FORMAT_RHETOREX_ADPCM: number
export const RIFF_WAVE_FORMAT_ROCKWELL_ADPCM: number
export const RIFF_WAVE_FORMAT_ROCKWELL_DIGITALK: number
export const RIFF_WAVE_FORMAT_RT24: number
export const RIFF_WAVE_FORMAT_SANYO_LD_ADPCM: number
export const RIFF_WAVE_FORMAT_SBC24: number
export const RIFF_WAVE_FORMAT_SIERRA_ADPCM: number
export const RIFF_WAVE_FORMAT_SIPROLAB_ACELP4800: number
export const RIFF_WAVE_FORMAT_SIPROLAB_ACELP8V3: number
export const RIFF_WAVE_FORMAT_SIPROLAB_ACEPLNET: number
export const RIFF_WAVE_FORMAT_SIPROLAB_G729: number
export const RIFF_WAVE_FORMAT_SIPROLAB_G729A: number
export const RIFF_WAVE_FORMAT_SIPROLAB_KELVIN: number
export const RIFF_WAVE_FORMAT_SIREN: number
export const RIFF_WAVE_FORMAT_SOFTSOUND: number
export const RIFF_WAVE_FORMAT_SONARC: number
export const RIFF_WAVE_FORMAT_SONIC: number
export const RIFF_WAVE_FORMAT_SONIC_LS: number
export const RIFF_WAVE_FORMAT_SONY_ATRAC3: number
export const RIFF_WAVE_FORMAT_SOUNDSPACE_MUSICOMPRESS: number
export const RIFF_WAVE_FORMAT_TPC: number
export const RIFF_WAVE_FORMAT_TUBGSM: number
export const RIFF_WAVE_FORMAT_UHER_ADPCM: number
export const RIFF_WAVE_FORMAT_UNKNOWN: number
export const RIFF_WAVE_FORMAT_VIVO_G723: number
export const RIFF_WAVE_FORMAT_VIVO_SIREN: number
export const RIFF_WAVE_FORMAT_VME_VMPCM: number
export const RIFF_WAVE_FORMAT_VORBIS1: number
export const RIFF_WAVE_FORMAT_VORBIS1PLUS: number
export const RIFF_WAVE_FORMAT_VORBIS2: number
export const RIFF_WAVE_FORMAT_VORBIS2PLUS: number
export const RIFF_WAVE_FORMAT_VORBIS3: number
export const RIFF_WAVE_FORMAT_VORBIS3PLUS: number
export const RIFF_WAVE_FORMAT_VOXWARE: number
export const RIFF_WAVE_FORMAT_VOXWARE_AC10: number
export const RIFF_WAVE_FORMAT_VOXWARE_AC16: number
export const RIFF_WAVE_FORMAT_VOXWARE_AC20: number
export const RIFF_WAVE_FORMAT_VOXWARE_AC8: number
export const RIFF_WAVE_FORMAT_VOXWARE_BYTE_ALIGNED: number
export const RIFF_WAVE_FORMAT_VOXWARE_METASOUND: number
export const RIFF_WAVE_FORMAT_VOXWARE_METAVOICE: number
export const RIFF_WAVE_FORMAT_VOXWARE_RT29HW: number
export const RIFF_WAVE_FORMAT_VOXWARE_TQ40: number
export const RIFF_WAVE_FORMAT_VOXWARE_TQ60: number
export const RIFF_WAVE_FORMAT_VOXWARE_VR12: number
export const RIFF_WAVE_FORMAT_VOXWARE_VR18: number
export const RIFF_WAVE_FORMAT_VSELP: number
export const RIFF_WAVE_FORMAT_WMAV1: number
export const RIFF_WAVE_FORMAT_WMAV2: number
export const RIFF_WAVE_FORMAT_WMAV3: number
export const RIFF_WAVE_FORMAT_WMAV3_L: number
export const RIFF_WAVE_FORMAT_WMS: number
export const RIFF_WAVE_FORMAT_XEBEC: number
export const RIFF_WAVE_FORMAT_YAMAHA_ADPCM: number
export const RIFF_WAVE_FORMAT_ZYXEL_ADPCM: number
function riffCreateAudioTemplateCaps(): Gst.Caps
function riffCreateIavsTemplateCaps(): Gst.Caps
function riffCreateVideoTemplateCaps(): Gst.Caps
function riffInit(): void
function riffParseChunk(element: Gst.Element, buf: Gst.Buffer, offset: number, fourcc: number, chunkData: Gst.Buffer): boolean
function riffParseFileHeader(element: Gst.Element, buf: Gst.Buffer, doctype: number): boolean
function riffParseInfo(element: Gst.Element, buf: Gst.Buffer, taglist: Gst.TagList): void
function riffReadChunk(element: Gst.Element, pad: Gst.Pad, offset: number, tag: number, chunkData: Gst.Buffer): Gst.FlowReturn
}
export default GstRiff