import React,{useState} from 'react';
import  styles from './TodoPlan.module.css';

export function TodoList() {
     
    const [activity, setActivity] = useState("");
    const [listData , setListData] = useState([]);
    const [count , setCount] = useState(0);
    const [iscompleted,setIscompleted] = useState(false)
    
   

    function handleAddTodo(){
        //    setListTodoData([...ListTodoData, activity])
        //    console.log(ListTodoData)

        setListData((listData)=>{
            const updateedList = [...listData, activity];
            // console.log(updateedList);
            setActivity('');
            setCount(count+1);
            return updateedList;
            
        })
    }

    function removeActivity(index){
    const updateedListData = listData.filter((elem , id) => index !== id );
    setListData(updateedListData);
    if(count > 0){
        setCount(count-1)
    }
    }

    function handleComplete(index){

    setIscompleted((iscompleted)=>!iscompleted)
        if(count > 0){
            setCount(count-1)
        }
        
    }
  return (
   <>
   <div className={styles.header}><h1>Todo List</h1></div>
   <div className={styles.container}>
    <div className={styles.heading}><h2>Pending tasks ({count})</h2></div>

    <ul className={styles.list}>
    {listData.length !== 0 && listData.map((data, index) =>{
        return(
            <>
          
                <div  key ={index} className={styles.listData}>
                <li className={styles.l2}><p className={`${iscompleted ? styles.show_line : styles.none_line}`}>{data}</p></li>

                   <button className={styles.complete_btn} onClick={()=>handleComplete(index)}>Compelet</button>
                   <button className={styles.X_btn} onClick={()=>removeActivity(index)}>X</button>
                </div>
           
            </>
        )
    })}
    </ul>
        <input  type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)} />
        <button className={styles.add_btn} onClick={handleAddTodo}>Add</button>

   </div>
   </>
  );
}