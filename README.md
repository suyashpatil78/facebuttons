# facebuttons

### The only library you need for fancy animated buttons

## How to use the package

* Simply install the package using `npm install facebuttons`
* In you component file, you need to import the `Loader` component

```
import {NeuroButton} from 'facebuttons';

function App() {

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div>
      <NeuroButton width="20" padding="40" onClick={handleClick} />
    </div>
  );
}

export default App;
```
## How it looks like

<p align="center">
  <img src="https://github.com/suyashpatil78/facebuttons/assets/127177049/2f92dc92-70ee-4f51-b06d-4664c0a1a01d" />
</p>

* If you face any issue, use github issues for that
