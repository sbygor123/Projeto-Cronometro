import Botao from "../Botao/Botao";
import Relogio from "./Relogio/Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado,finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(()=>{
    if(selecionado?.tempo){
      (setTempo(tempoParaSegundos(selecionado.tempo)))
    }
  }, [selecionado])

 function contagemRegressiva(contador: number = 0){
  setTimeout(()=>{
    if(contador > 0){
      setTempo(contador - 1);
      return contagemRegressiva(contador -1)
    }
    finalizarTarefa()
  }, 1000)
}
 
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio 
        tempo={tempo}/>
      </div>
      <Botao onClick={()=> contagemRegressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  )
}

function s(arg0: () => void, arg1: number, s: any) {
  throw new Error("Function not implemented.");
}
