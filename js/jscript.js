function myReadDead(a) {
  let blank = " ";
  let star = "*";
  let inter = a;

  console.log(blank.repeat(inter + 1) + star);
  for (let i = 0; i < inter; i++) {
    console.log(
      blank.repeat(a) + star + blank.repeat((inter - a) * 2 + 1) + star
    );
    a--;
  }

  console.log(star.repeat(inter * 2 + 3));
}

function repeat(reer, toor) {
  for (let i = 0; i < toor; i++) {
    myReadDead(reer);
  }

  let breaker = " ";
  let stars = "*";
  console.log(breaker.repeat(reer) + stars);
  console.log(breaker.repeat(reer) + stars);
  console.log(breaker.repeat(reer) + stars);
}

repeat("s", 2);
