import BoletinOficialButtons from './components/BoletinOficialButtons'
import { BannerText } from '../../components/bannertext'

const PdfDownloader = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
      <BannerText titulo="Boletín Oficial"/>
      <BoletinOficialButtons />
    </div>
    </>
  )
}
export default PdfDownloader
