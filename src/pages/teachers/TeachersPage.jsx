import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isModalOpen , setIsModalOpen] = useState(true)
  const [name , setName] = useState("")
  const [profession , setProfession] = useState("")
  const [linkedIn , setLinkedIn] = useState("")
  const [gmail , setGmail] = useState("")
  const [age , setAge] = useState("")
  const [experience , setExperience] = useState("")
  const [avatar , setAvatar] = useState("")
  const [science , setScience] = useState("")
  const [rating , setRating] = useState("")
  const [gender , setGender] = useState("")
  const [selected , setSelected] = useState(null)

  async function getAllTeachers() {
    try {
      let res = await axios.get(
        `https://69243f273ad095fb84735a27.mockapi.io/teachers?search=${search}`
      );
      setTeachers(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  async function addTeacher(e) {

    e.preventDefault()
    try{
      if(selected){      
        await axios.put(`https://69243f273ad095fb84735a27.mockapi.io/teachers/${selected}` , {name , avatar , gender , age , experience , science , gmail , linkedIn , rating , profession })
      toast.success("Siz o'qituvchini tahrirladingiz")

      }else{
        await axios.post("https://69243f273ad095fb84735a27.mockapi.io/teachers" , {name , avatar , gender , age , experience , science , gmail , linkedIn , rating , profession })
              toast.success("Siz o'qituvchi qo'shdingiz")

      }
      setIsModalOpen(false)
      getAllTeachers()
      setSelected(null)
      setAge("")
      setAvatar("")
      setExperience("")
      setGender("")
      setGmail("")
      setLinkedIn("")
      setName("")
      setProfession("")
      setRating("")
      setScience("")
      
    }catch(err){
      console.log(err);
      
    }
  }
  useEffect(() => {
    getAllTeachers();
  }, [search]);

  async function editTeacher(id) {
    setSelected(id)
    setIsModalOpen(true)
    try {
     let res = await axios.get(`https://69243f273ad095fb84735a27.mockapi.io/teachers/${id}`)
     setAge(res.data.age)
     setAvatar(res.data.avatar)
     setExperience(res.data.experience)
     setGender(res.data.gender)
     setGmail(res.data.gmail)
     setLinkedIn(res.data.linkedin)
     setName(res.data.name)
     setProfession(res.data.profession)
     setRating(res.data.rating)
     setScience(res.data.science)
    } catch (error) {
      console.log(error);
      
    }
    
  }
  async function deleteTeacher(id) {
    try {
      await axios.delete(
        `https://69243f273ad095fb84735a27.mockapi.io/teachers/${id}`
      );
      getAllTeachers();
      toast(`Siz ${id}-id li o'qituvchini o'chirdingiz`);
    } catch (err) {
      console.log(err);
    }
  }
  function closeModal(){
      setIsModalOpen(false)
      setSelected(null)
      setAge("")
      setAvatar("")
      setExperience("")
      setGender("")
      setGmail("")
      setLinkedIn("")
      setName("")
      setProfession("")
      setRating("")
      setScience("")

  }
  if (loading) {
    return (
      <div className="flex items-center justify-center flex-col h-screen">
        <div className="text-gray-800 relative w-[100px] h-[100px] border-[4px] border-gray-800  font-bold rounded-[50px] flex items-center justify-center flex-col animate-spin ">
          <span className="absolute w-[15px] h-[10px] bg-white top-[-4px]"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="">
    {isModalOpen ?
     <div
     onClick={closeModal}
      id="outer-modal"
      className="fixed top-0 left-0 w-full h-full flex  transition-transform duration-300 scale-100 items-center z-40 justify-center backdrop-blur bg-[black]/50"
    >
      <form
      onSubmit={addTeacher}
      onClick={(e) => e.stopPropagation()}
        id="form"
        className="max-w-lg bg-white p-[20px] w-full rounded-xl mx-auto"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
          value={name}
          onChange={(e) => setName(e.target.value)}
            type="text"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Full name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
            type="text"
            name="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Profession
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
            type="text"
            name="repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            LinkedIn
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
            type="email"
            name="repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Gmail
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
              type="number"
              name="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Age
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
              type="number"
              name="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Experience
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
              type="text"
              name="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Img URL
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
            value={science}
            onChange={(e) => setScience(e.target.value)}
              type="text"
              name="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Telegram nickname
            </label>
          </div>
        </div>

        <div className="relative flex gap-[30px] z-0 w-full mb-5 group">
          <div className="relative z-0 w-[50%] mb-5 group">
            <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
              type="number"
              name="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Rating
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
            value={gender}
            checked={(e) => setGender(e.target.value)}
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
            <label
              htmlFor="default-checkbox"
              className="select-none ms-2 text-sm font-medium text-heading"
            >
              Male ?
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong bg-blue-700 rounded-xl focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          {selected ? "Edit Teacher" : "Add Teacher"}
        </button>
      </form>
    </div> : "" }

      <div className="flex gap-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none p-2 text-[20px] font-medium ml-12  my-5 rounded-[10px] bg-gray-800 text-gray-400 "
          type="search"
          placeholder="Search Teachers"
        />
        <button
        onClick={() => setIsModalOpen(true)}
        className="outline-none p-2 text-[20px] font-medium  my-5 bg-gray-800 rounded-[10px] bg-gray-800 text-blue-500">
          Add Teacher
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teachers.map((el) => (
          <div
            key={el.id}
            className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group"
          >
            <div className="flex flex-col items-center text-center mb-4">
              <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-blue-100 dark:ring-blue-900">
                <Link to={`/teachers/${el.id}`}>
                  <img
                    className=" object-cover size-full"
                    alt={el.name}
                    src={el.avatar}
                  />
                </Link>
              </span>
              <h3 className="text-gray-900 dark:text-white mb-1">{el.name}</h3>

              <span className="inline-flex items-center justify-center rounded-md border border-blue-500 text-blue-600 dark:text-blue-400 px-2 py-0.5 text-xs font-medium w-fit bg-secondary text-secondary-foreground mb-2">
                {el.profession}
              </span>

              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  {el.experience}y
                </span>
                <span className="flex items-center gap-1">{el.age}y</span>
              </div>

              <div className="flex items-center gap-1 mb-4">
                <span className="text-gray-900 dark:dark:text-gray-400">
                  Rating: {el.rating}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <span className="truncate">{el.createdAt}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <span className="truncate">{el.gmail}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <span className="truncate">@{el.science}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <span className="truncate">linkedin.com/in/{el.linkedin}</span>
              </div>

              <div className="flex gap-3 pt-2 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                onClick={() => editTeacher(el.id)}
                  className="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm font-medium text-gray-800 dark:text-gray-200 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Edit
                </button>

                <button
                  onClick={() => deleteTeacher(el.id)}
                  className="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900/40 dark:hover:bg-red-900/60 dark:text-red-300 text-sm font-medium transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPage;
