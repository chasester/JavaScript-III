/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding 
* 2. Implicit Binding 
* 3. New binding 
* 4. Explicit binding 
*
* write out a code example of each explanation above
*/

// Principle 1
{
  function a(thing)
  {
    //console.log(this); // - prints a butch of bs we dont want.
    return `ok i did it - ${thing}`;
  } 
  let example = {a: "Anton", b:"Bob", c:"Charily", d:"Daron"};
  console.log(a(example.a));
}
// code example for Window Binding

// Principle 2
{
  const b = obj =>
  {
    obj.dosomething = function()
    {
      return `ok i did it - ${this.b}`;
    }
  }
  let example = {a: "Anton", b:"Bob", c:"Charily", d:"Daron"}
  b(example);
  console.log(example.dosomething());
}
// code example for Implicit Binding

// Principle 3

{
	function c(things)
	{
		this.thinga = things.a;
		this.thingb = things.b;
    this.thingc = things.c;
    this.thingd = things.d;
		this.dosomething = function()
		{
			return `ok i did it - ${this.thingc}`;
		};
	}

	let example = new c({a: "Anton", b:"Bob", c:"Charily", d:"Daron"});
	console.log(example.dosomething());
}


// code example for New Binding

// Principle 4
{
	function d(things)
	{
		this.thinga = things.a;
		this.thingb = things.b;
    this.thingc = things.c;
    this.thingd = things.d;
		this.dosomething = function()
		{
			return `ok i did it - ${this.thingd}`;
		};
	}

  let example = new d({a: "Anton", b:"Bob", c:"Charily", d:"Daron"});
	console.log(example.dosomething.call(example));
}
// code example for Explicit Binding