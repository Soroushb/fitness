import React, {useState} from 'react'

import { IoMdFitness } from "react-icons/io";
import { GiMuscleUp, GiLeg } from "react-icons/gi";
import ExerciseByMuscle from './ExerciseByMuscle';
import ExercisesByBodyPart from './ExercisesByBodyPart';
import ExerciseByEquipment from './ExerciseByEquipment';

const ExerciseByTarget = () => {

  
  const [type, setType] = useState("MUSCLE")
  const [activeFilter, setActiveFilter] = useState("MUSCLE")

  

  return (
    <div className='target-container'>
      <div className='target-type-container'>

      <div onClick={() => setType("EQUIPMENT")} className={`target-type ${type === "EQUIPMENT" ? 'active-filter' : ''}`}>
      <h1 style={{ textAlign: 'center' }}><IoMdFitness/></h1>
      </div>

      <div onClick={() => setType("BODY")} className={`target-type ${type === "BODY" ? 'active-filter' : ''}`}>
      <h1 style={{ textAlign: 'center' }}><GiMuscleUp/></h1>
      </div>

      <div onClick={() => setType("MUSCLE")} className={`target-type ${type === "MUSCLE" ? 'active-filter' : ''}`}>
      <h1 style={{ textAlign: 'center' }}><GiLeg/></h1>
      </div>

      </div>

      {type === "MUSCLE" && (<ExerciseByMuscle/>)}
      {type === "BODY" && (<ExercisesByBodyPart/>)}
      {type === "EQUIPMENT" && (<ExerciseByEquipment/>)}


    </div>
  );
}

export default ExerciseByTarget