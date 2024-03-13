import { useForm } from './hooks/useForm';
import { useFetch } from './hooks/useFetch';
import { Info } from './components/Info';
import SearchIcon from './assets/icons/search.svg';

export const WeatherApp = () => {
  const { city, onChange } = useForm({
    city: ''
  })
  const { fetchData, response, loading, error } = useFetch(city);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  return (
    <>
      <form className="input-container" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="London"
          name="city"
          value={city}
          onChange={onChange}
        />
        <button className='search-icon'>
          <img
            src={SearchIcon}
            alt="Search Icon"
          />
        </button>
      </form>
      {loading
        ? <p className='message'>Cargando...</p>
        : error || response === null || response.cod == '404' || response.cod == '400'
          ? <p className='message'>Sin resultados</p>
          :
          <Info weatherInfo={response} />
      }
      <span className='watermark'>
        Proyecto realizado por <a href="https://facyn.xyz" target="_blank">Facyn</a>
      </span>
    </>
  )
}
