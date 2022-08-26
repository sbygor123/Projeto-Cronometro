import style from './Relogio.module.scss';

interface props {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: props) {

  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60
  //transformando o tempo em um array de string 
  const [minDez, minUnidade] = String(minutos)
    .padStart(2, '0')
  const [segDez, segUnidade] = String(segundos)
    .padStart(2, '0')


  return (
    <>
      <span className={style.relogioNumero}>{minDez}</span>
      <span className={style.relogioNumero}>{minUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segDez}</span>
      <span className={style.relogioNumero}>{segUnidade}</span>
    </>
  )
}