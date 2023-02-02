# Calculater
this is calculater
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
    <style>
        #input::-webkit-scrollbar {
            display: none;
        }
    </style>
</head>
<body>
<div class="flex justify-center items-center w-screen h-screen">
    <div class="border border-black  min-w-[25vw] h-[70vh] p-1">
        <div class="bg-slate-300 h-[40%] flex flex-col items-end justify-end w-full ">
            <div class="w-full h-full text-right text-gray-600 overflow-y-auto" id="history"></div>
            <input type="text" id="input" class=" border-none outline-none p-2 text-4xl w-full text-right" placeholder="0"></input>
        </div>
        <div class="h-[40%] w-full rounded-sm">
            <div class=" flex gap-2 justify-center items-center p-1">
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="9">9</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="8">8</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="7">7</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" id="equal">=</button>
                
            </div>
            <div class=" flex gap-2 justify-center items-center p-1">
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="6">6</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="5">5</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="4">4</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="-">-</button>
            </div>
            <div class=" flex gap-2 justify-center items-center p-1">
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="3">3</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="2">2</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="1">1</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="*">*</button>
            </div>
            <div class=" flex gap-2 justify-center items-center p-1">
                <button class="bg-orange-500 text-white pt-4 pb-4 pl-8 pr-8">c</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="0">0</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="+">+</button>
                <button class="bg-gray-200 pt-4 pb-4 pl-8 pr-8" value="/">/</button>
            </div>
        </div>
    </div>
</div>
<script>
const buttons = document.querySelectorAll('button');
const input = document.getElementById('input');
const equal = document.getElementById('equal');
const history = document.getElementById('history');
buttons.forEach(button => {
    button.onclick = () => {
        input.value += button.value;
    }
});
equal.onclick = () => {
    const Value = eval(input.value);
    history.innerHTML += input.value + '<br>';
    input.value = Value;
}
</script>
</body>
</html>
