import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Message } from '../../components/Message';
import Block from '../../utils/Block';
import './chat.scss';
import { tmpl } from './chat.tmpl';

export class Chat extends Block {
    constructor() {
        super('div', {user1:'User 1: Hi!',
         user2:'User 2:hello!',
         user11:' User 1: How are you?',
         user22:'User 2: Well done!'});
    }

    init() {
    this.children.inputDialog = new Input({
      class:'chat-message-input',
      name: 'lenta-message',
      type: 'text',
      placeholder: 'Поиск...',
   
      events: {
      focus: () => { console.log(this.children.inputDialog.takeValue); },
  }, 
})
    this.children.inputMessage = new Input({
      class:'chat-message-input',
      name: 'message',
      type: 'text',
      placeholder: 'Сообщение...',
      events: {
      focus: () => { console.log(this.children.inputMessage.isValidMessage); },
  }, 
})
    this.children.userAvatar = new Avatar({
    imageName: 'https://i.pinimg.com/originals/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg',
    imageText: 'no photo',
    imageClass: 'chat-chat-img'
})
    this.children.userAvatar2 = new Avatar({
    // eslint-disable-next-line max-len
    imageName: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///9CQkJBQUE6OjoyMjIwMDA7Ozs+Pj4sLCwxMTE3NzfU1NQtLS0pKSnc3NzOzs7y8vJWVlalpaW/v7+xsbEjIyPi4uLr6+tdXV2Tk5Pe3t729varq6toaGhjY2OkpKRycnKCgoJLS0uKioq2trZJSUmamprExMRubm56enodHR0VFRWGhoYLCwtSU1Jo364dAAAMRklEQVR4nO2diZaquhKGJSQEAgGVWZBBEKS31/d/vBvQbsXGuRE8K986vc8S1JWfVCqpDOVkwuFwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBzOk7hWPh26DD0ytZaQUlKVQxekH1zLs6nszYsVtdHWGLo4f41rRdBG3lxX/XihZgKlK18fulB/x9SKKLVnc0f1V0gi2tJyjIrKdBa7QxftL2iMk0ahoxeiJgo1mMiR6ZQJpF+z8MNF1sZJURQuDH8NJeEIgCQpnTyCmrbJg6GL+SxMnmzbrJZUf40wFloAjCFODcfaUQo/0rk64Yx5Ttbi1AwiCQhdAEkhmb6Yzz7PubLaQzaJcsfIBEUCoFvgXiRcFbrKepAPcq5uGMnUjnLX2ALI5AnXFNYiRdaLOHqGKHOuztClv4nLjNOGCau9VEF17V1X9yOSzlgPkhLWp1hjdq5u6Gk22eROmQJyoe1dApP6g2ZCbJKY43SuzDgppRvTLVMJ1o7zrtpriYRsxOrmkf1V5KNzrrVxMqfPuvEKwQdr7wTmd5hTdcLc3xmpOrSoI07oIVti8sxqX3sXig8AZr0gxlcbJ8BQyNzMM/5nr4rF0NJq3HlEbVqVTJ5IcFfZAWZDUZlqUNh50Wa5jGYrSabsNRFxt1Il9meBXhA2XJgP7HeccPdFxZTJ28itQdm3OBEh0UuLXHXOwt7A0ct5tlxrSodMce57BmED9Qx/fc3ywUQy45RtXMtLSJc8AkUvM/cdXODqZW7Fvp9lmV+EeWk4e3/pGvFG0AjrNM8VIgIji3llkcLNEM6VdQxsqMXGlWYC4W/jBETGvjFtJMzT5YrISIGEiJIoSRIhkA24keBVflm3tECfe/T0GTUKYf0tMGG+eWPbJH33oG79ZePMYJ5dIx2uBcB1UdedHrMASWG6Ottb3T4hCxL9kj2Jab7Uft5FGoXNK0xoUrrmUv6ib9UY1D7dWpK69n4XHXomK7KZYMTkg2bY1iHwIJNpgCSasweiV9+O+EQhe4PYxCDhznqnwonBuvfGrjoKj8LJRK1E1NE0L8kERItypnEl/VZYI8kgK987RbfIs4gopMv6oDFRZ9rdQ9Jv2IAmnAQeOFfYDAM0IZkb7/c2gRpWKwWKbR2SP7GodHj8DyisW2800bWWQgBEouzSfMiIwzH9HZVP3I0YTnadrfMOqDpFR4WSKLOY0RxDqBGo82qFDl6HKZxdHrldR9On+zqMmUJ7ue9uRgOrTE9izlN6QaFcKwQSofNsFowygpqq84TGLyn8olJl6ZPtbGgtVwhYO3xaYXAYhG5XA6u4zgt1+P0V8XZIATd5XWGQj3q25nWFDoTivzHPn76ssGJfANbDirjKywpndceqjKozbPN6HYqsDnfDirjKywrdNSLaf7odToJyFMPRi7yucLHy8kEl3OCosJ4elbBwKdJgd+sZjjpMOqtDqox6HapRyAbQsgaiKk03a1n+PQ+OiSJjr9qmmx2iaB9kHsc0Ihq5lQKAxMRa/IQHjpUQeBo0ippXqMfbZbaWMRDkn4l8RRn1MttMVDzzvDcLzA05BMqi1rFOqKZEPFqpDEdtpeuoe1HFDWdUlCC5sNbr+v/7vjGlaMydxeRK4Zzs2qYE57tmHUrMPy3S6NA18t7Z0bejamQ+dBn6xYRiMXQZ+sUiUjZ0GfolJjgdugz94ot4OXQZ+iUT8ZinE/+ARCFk6DLcS+A6qplblpUbi+NALnCM5pqpLtyuue2yKEYdPTUEZuhX0Q4QSqn9ZduUQlztR2WLCiNEbQa12dVVVPnhB+4xXfwTJZECr/KL0CxLM0xYiIRWOwaUJJo0F63YrzzBJiL5N+qRdicOFXDUCjCCFAqCJEkYw7R1Y7qUAB11tNRNTIRzy1sCvFwuMY7OrgcCjN9VrD9kQTfnl0xUX6ror7ghsT/PSJnt2edVNcntkP1r2b/ihsge8fTvZbRfK2RVE8TrcnV+Y6e9pUR/zYqczyahfctc07MGOsVjXqS4TCqfNa6Q+s3/fRq2b3TU6kcQn3kUF2v7LsFVxHbtmvQzo8GStmK8wPvREdNZy059e3Sbnu8iENHJnJuBtaMpVrJ0oknXyEe60rrdoagwDUM1TH8ny6eWWCC689ktwzDjJZLDi98xcozo68tm/7E/mraHZU6qfdkHvFHPjd4gUM0wjudm15BFN+dxHJrq50UVHA6Hw+FwOBwOh8PhcP57ZLcn0ab+G8rRGz4Ct9YFHUH7YIk5BVi+PtlbUgzo+NfsL+Cg+pj91cXPAtUHfeEoskM8jLFRYbNhVrm8vWnbHKgUkLH5uCnTIFzLdEH2W56J1+1vpt7hDVBHshB+0sz+IgOEmWe5+9613ulvFuBwnh2sSsSeg5h9irEaidycYidh+n0sAcDf/qb8SfSCK6upTElbfsAa1DTE36kGpEPBG4m/VggL+rN1n4TVQSxA4sgTDTpb/CNKwCsVHc8fnPmbCp7cMtbHgwpErMa7L6NcHvIiHkA6OXl16m+m0ekdpJ7IrfN+RaPsIN1YRGfnnUicnebGwOTnWFMrnY2UxmL7gxjCYmx7pPQtIcI5YKUqrdeHIwYmaR0RUozVeXYb9lYlGVEmrInJzLPr9Jasr1vVClDtbwrUehMQ1PaF74qUZ9Y4lhaZeXanqREE0S9OFQJClsbEWLaThbA3iecfPGgkKBveWOvjSsLP8bozWtXDBgGxnm/Wm1yPhROT1tR1t8B99p3NsF2kGdGr6eeQmXxXogTnji9BADAh/mL+42vw0vzdgk8rEu3CoYzVKeCV/HP74tVpZppHoKSOT/fWCVh/4Dupsn80sPSufwfzrPZ2iC7STUlXEqwzoNoct5SE0gTfra2WLElmya4CAa9bnWEX7O0ijN5urHF9KvR2oh2wLJkNwsipzvwlQNUigmx4bm7uSv8J0Oyt9TidoTuzQGmGh7ViEmq/7sjzSSGDmaHdmY8I2G8c6Tjg8unlM/Cy/Mf6+WB9btF4xfyH+WVu7s+UKb/txJ4jPnAcHZWNdYXnrU1pdnqppfZATql3HSwNHhHI6mr/qfNKPOyZfSxrFnrPPMADdlUD99vycqV9dd+oQvjQd73nvFes3C5JC23/4NtScHMt6ByRXuEdpxYM+tBTr+O9pPmgeaoG7qOM5P7Mgwf6TwgSCBfyxl6RqOx7693xg4fULObvPuTml4G+h3ApeSKfHmjs1PynffOvqcLpM6n5pJ4Pl+b08TKxQVdzemaq71mwv0by5kLUdB2t147f7Qx0b4PqvtqnsEZhf82xBOtxG22Q+pyNWz6ZeQZorNuPjmlaQMTGDfcO184Re+wyrFthwEWwMJ2ePB2Ap1Ph2Tw9e4vohWdttJEYuSePByA3erijOH7613GjvyJ5+qkzyNaQf15QY/uMT/4GJ/0IzB8dgLRR/J/uj5r+owOjNlovmU8C8vxDrwEwPrRjZMWvPSw2Tuqj3/evThjdAwrD2lC1sCMefhDSw9q//lRf30a2LA1o4fMu+UgPx2rdmXRvXH8RoIShHYbo1e9hvmbXQ6Q4Bc//MscPNF6E6OUnJWCpl1DYXb9cMrJSsxedTI246qlDdFevdIgs8FHShfeyv6pNtLeR6fQliYDk5h2TyDeR1j3O1gTRUwHPAVG3X9cnkKjXGDioXrAy8eYE/j0Ckz711WTPBj1/ohDQN6TBtp6W+LpC0F/gdIoqPekuXlaIyZvW9l3vuT7tVYXEe99uouLRSdM/UPh7W1WvGMITIfpLCkXw5g2aQfV4BPSCQqAl79+caYJHu8bnFRI8yD6wYCs/5lSfVQi0dKjdteruocWx5xQCuBpyi3QuPTB784xCQMSB04IERceWvb9TSBR/+B21bqbdGXA8rFCk1fD72mpcH961tP+YQiDR7Tj01biFcGsD2IMKART98eirCfLV9U18jygEEgLzER6/UNP69xBfV4ghTMZ6hCbIIwLBxcnCexRigrxwePd5Bdeqf1K0W+MthQCLdBV/wMGZaV4BuevHH68pZOo0KRn371idEqjz+jdwpfYa4QWFAGOIcFQM8COVrxHoVraTKRQlfKjPc4Wg+TVZStdpqI7Qc96JU8bZZichqikKUqlYQwhBkF3Bq+U2NsfV6z1L4C7UMrdcv/AZRWzlpqF35rnmcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDucy/wcpotV0IxSYyAAAAABJRU5ErkJggg==',
    imageText: 'no photo',
    imageClass: 'chat-chat-img'
})
    this.children.MessageButton = new Button({
    type: 'button',
    label: 'Отправить',
    class: 'chat-send-button',
    events: { click: () => console.log('Отправилось!') },
})
    this.children.messageI = new Message({
    class: "chat-message-item chat-message-received",
    text: "User 1: Hi!",
    })
    this.children.messageAnswer = new Message({
    class: "chat-message-item chat-message-sent",
    text: "User 1: Hello!",
    })
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

