// 1. 特效顯示 function
function showEffect(buttonPressed) {
    const effectLayer = document.getElementById('effect-layer');
    if (!effectLayer) return; 
    effectLayer.innerHTML = '';

    const btnClass = ".btn-" + buttonPressed.toLowerCase();
    const btnElement = document.querySelector(btnClass);
    if (!btnElement) return;

    const rect = btnElement.getBoundingClientRect();
    const containerRect = document.querySelector('.game-container').getBoundingClientRect();

    let centerX = rect.left - containerRect.left + (rect.width / 2);
    let centerY = rect.top - containerRect.top + (rect.height / 2);

    let customWidth = "20%"; 

    // --- 個別微調區 (位置 + 大小) ---
    if (buttonPressed === 'A') {
        centerX += 5;  
        centerY += 0; 
        customWidth = "14%"; // 讓 A 圖片大一點
    } 
    else if (buttonPressed === 'B') {
        centerX += 5;
        centerY += -7;
        customWidth = "17%"; // 讓 B 圖片小一點
    } 
    else if (buttonPressed === 'C') {
        centerX += 7;
        centerY += 0;
        customWidth = "17%"; // C 保持原樣
    }

    // 動態創建圖片
    const effectImg = document.createElement('img');
    effectImg.src = `img/${buttonPressed}.jpg`; 

    effectImg.style.left = centerX + "px";
    effectImg.style.top = centerY + "px";
    
    // 🔥 這裡改用我們上面設定的變數 customWidth
    effectImg.style.width = customWidth; 
    effectImg.style.height = "auto";

    effectLayer.appendChild(effectImg);
}

// 2. 特效隱藏 function (放開手指時觸發)
function hideEffect() {
    const effectLayer = document.getElementById('effect-layer');
    effectLayer.innerHTML = ''; // 清空內容即可
}

let currentStep = 1;

        function changePage(buttonClicked) {
            let imgElement = document.getElementById("game-image");

            if (currentStep === 1) {
                currentStep = 2;
                imgElement.src = "img/chajing.png";
                
            } else if (currentStep === 2) {
                if (buttonClicked === 'A') {
                    currentStep = 3;
                    imgElement.src = "img/GTnofermentation.png";
                } else if (buttonClicked === 'B') {
                    currentStep = 13;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-03.png";
                } else if (buttonClicked === 'C') {
                    currentStep = 41;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-03.png";
                }
                

                // 綠茶線
            } else if (currentStep === 3) {
                if (buttonClicked === 'A') {
                    currentStep = 4;
                    imgElement.src = "img/GTsauna.png"; 
                }
                
            } else if (currentStep === 4) {
                if (buttonClicked === 'A') {
                    currentStep = 5;
                    imgElement.src = "img/GTsauna2.png"; // 三溫暖
                } else if (buttonClicked === 'B') {
                    alert("小茶菁現在不想按摩！"); // 按摩
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想吹乾身體！"); // 吹乾
                }
            } else if (currentStep === 5) {
                // 不發酵茶菁 (03.jpg)
                if (buttonClicked === 'A') {
                    currentStep = 6;
                    imgElement.src = "img/GTmassage.png"; 
                }
                
            } else if (currentStep === 6) {
                if (buttonClicked === 'A') {
                    alert("小茶菁做過三溫暖了！"); 
                } else if (buttonClicked === 'B') {
                    currentStep = 7;
                    imgElement.src = "img/GTmassage2.png"; 
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想吹乾身體！"); // 吹乾
                }
            } else if (currentStep === 7) {
                if (buttonClicked === 'A') {
                    currentStep = 8;
                    imgElement.src = "img/GTdry.png"; 
                }
            } else if (currentStep === 8) {
                if (buttonClicked === 'A') {
                    alert("小茶菁做過三溫暖了！"); 
                } else if (buttonClicked === 'B') {
                    alert("小茶菁做過按摩了！"); 
                } else if (buttonClicked === 'C') {
                    currentStep = 9;
                    imgElement.src = "img/GTdry2.png"; 
                }
            } else if (currentStep === 9) {
                if (buttonClicked === 'A') {
                    currentStep = 10;
                    imgElement.src = "img/GTevolution.png";
                }
            } else if (currentStep === 10) {
                if (buttonClicked === 'A') {
                    currentStep = 11;
                    imgElement.src = "img/GT.png";
                }
            } else if (currentStep === 11) {
                if (buttonClicked === 'A') {
                    currentStep = 12;
                    imgElement.src = "img/GT2.png";
                }
            } else if (currentStep === 12) {
                if (buttonClicked === 'ANY') {
                    currentStep = 1;
                    imgElement.src = "img/home.png";
                }
            }
            // 綠茶線


            // 鐵觀音線
            else if (currentStep === 13) {
                if (buttonClicked === 'A') {
                    currentStep = 14;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-04.png"; 
                }
            } else if (currentStep === 14) {
                if (buttonClicked === 'A') {
                    currentStep = 15;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-05.png"; 
                } else if (buttonClicked === 'B') {
                    alert("小茶菁現在不想室內運動！"); 
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想三溫暖！"); 
                }
            } else if (currentStep === 15) {
                if (buttonClicked === 'A') {
                    currentStep = 16;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-06.png"; 
                }
            } else if (currentStep === 16) {
                if (buttonClicked === 'A') {
                    alert("小茶菁曬過太陽了！"); 
                } else if (buttonClicked === 'B') {
                    alert("小茶菁現在不想室內運動！"); 
                } else if (buttonClicked === 'C') {
                    currentStep = 17;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-07.png"; 
                }
            } else if (currentStep === 17) {
                if (buttonClicked === 'A') {
                    currentStep = 18;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-08.png"; 
                }
            } else if (currentStep === 18) {
                if (buttonClicked === 'A') {
                    alert("小茶菁現在不想三溫暖！"); 
                } else if (buttonClicked === 'B') {
                    currentStep = 19;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-09.png"; 
                } else if (buttonClicked === 'C') {
                    //東方美
                    currentStep = 28;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-09.png"; 
                }
            } else if (currentStep === 19) {
                if (buttonClicked === 'A') {
                    currentStep = 20;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-10.png"; 
                }
            } else if (currentStep === 20) {
                if (buttonClicked === 'A') {
                    alert("小茶菁現在不想按摩！"); 
                } else if (buttonClicked === 'B') {
                    currentStep = 36;
                    imgElement.src = "bao/茶葉電子雞 包種茶線-11.png"; 
                } else if (buttonClicked === 'C') {
                    currentStep = 21;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-11.png"; 
                }
            } else if (currentStep === 21) {
                if (buttonClicked === 'A') {
                    currentStep = 22;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-12.png"; 
                }
            } else if (currentStep === 22) {
                if (buttonClicked === 'A') {
                    currentStep = 23;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-13.png"; 
                } else if (buttonClicked === 'B') {
                    alert("小茶菁現在不想熱敷按摩！");
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想吹乾身體！");
                }
            } else if (currentStep === 23) {
                if (buttonClicked === 'A') {
                    currentStep = 24;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-14.png"; 
                }
            } else if (currentStep === 24) {
                if (buttonClicked === 'A') {
                    currentStep = 25;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-15.png"; 
                }
            } else if (currentStep === 25) {
                if (buttonClicked === 'ANY') {
                    currentStep = 26;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-16.png"; 
                }else if (buttonClicked === 'A') {
                    currentStep = 26;
                    imgElement.src = "iron/茶葉電子雞 鐵觀音茶線-16.png"; 
                }
            } else if (currentStep === 26) {
                if (buttonClicked === 'ANY') {
                    currentStep = 1;
                    imgElement.src = "img/home.png"; 
                }
            }
            // 鐵觀音線


            // 東方美線
            else if (currentStep === 28) {
                if (buttonClicked === 'A') {
                    currentStep = 29;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-10.png"; 
                }
            } else if (currentStep === 29) {
                if (buttonClicked === 'A') {
                    alert("小茶菁現在不想三溫暖！");
                } else if (buttonClicked === 'B') {
                    currentStep = 30;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-11.png"; 
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想吹乾身體！");
                }
            } else if (currentStep === 30) {
                if (buttonClicked === 'A') {
                    currentStep = 31;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-12.png"; 
                }
            } else if (currentStep === 31) {
                if (buttonClicked === 'A') {
                    alert("小茶菁現在不想三溫暖！");
                } else if (buttonClicked === 'B') {
                    alert("小茶菁做過按摩了！");
                } else if (buttonClicked === 'C') {
                    currentStep = 32;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-13.png"; 
                }
            } else if (currentStep === 32) {
                if (buttonClicked === 'A') {
                    currentStep = 33;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-14.png"; 
                }
            } else if (currentStep === 33) {
                if (buttonClicked === 'A') {
                    currentStep = 34;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-15.png"; 
                }
            } else if (currentStep === 34) {
                if (buttonClicked === 'ANY') {
                    currentStep = 35;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-16.png"; 
                }else if (buttonClicked === 'A') {
                    currentStep = 35;
                    imgElement.src = "Eside/茶葉電子雞 東方美人茶線-16.png"; 
                }
            } else if (currentStep === 35) {
                if (buttonClicked === 'ANY') {
                    currentStep = 1;
                    imgElement.src = "img/home.png"; 
                }
            }
            // 東方美線


            // 包種茶線
            else if (currentStep === 36) {
                if (buttonClicked === 'A') {
                    currentStep = 37;
                    imgElement.src = "bao/茶葉電子雞 包種茶線-12.png"; 
                }
            } else if (currentStep === 37) {
                if (buttonClicked === 'A') {
                    currentStep = 38;
                    imgElement.src = "bao/茶葉電子雞 包種茶線-13.png"; 
                }
            } else if (currentStep === 38) {
                if (buttonClicked === 'ANY') {
                    currentStep = 39;
                    imgElement.src = "bao/茶葉電子雞 包種茶線-14.png"; 
                } else if (buttonClicked === 'A') {
                    currentStep = 39;
                    imgElement.src = "bao/茶葉電子雞 包種茶線-14.png"; 
                }
            } else if (currentStep === 39) {
                if (buttonClicked === 'ANY') {
                    currentStep = 1;
                    imgElement.src = "img/home.png"; 
                }
            }
            // 包種茶線


            // 紅烏龍茶線
            else if (currentStep === 41) {
                if (buttonClicked === 'A') {
                    currentStep = 42;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-04.png"; 
                }
            } else if (currentStep === 42) {
                if (buttonClicked === 'A') {
                    currentStep = 43;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-05.png"; 
                } else if (buttonClicked === 'B') {
                    alert("小茶菁現在不想按摩！");
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想三溫暖！");
                }
            } else if (currentStep === 43) {
                if (buttonClicked === 'A') {
                    currentStep = 44;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-06.png"; 
                }
            } else if (currentStep === 44) {
                if (buttonClicked === 'A') {
                    alert("小茶菁做過曬太陽了！");
                } else if (buttonClicked === 'B') {
                    currentStep = 45;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-07.png"; 
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想三溫暖！");
                }
            } else if (currentStep === 45) {
                if (buttonClicked === 'A') {
                    currentStep = 46;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-08.png"; 
                }
            } else if (currentStep === 46) {
                if (buttonClicked === 'A') {
                    alert("小茶菁做過曬太陽了！");
                } else if (buttonClicked === 'B') {
                    alert("小茶菁做過按摩了！");
                } else if (buttonClicked === 'C') {
                    currentStep = 47;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-09.png"; 
                }
            } else if (currentStep === 47) {
                if (buttonClicked === 'A') {
                    currentStep = 48;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-10.png"; 
                }
            } else if (currentStep === 48) {
                if (buttonClicked === 'A') {
                    currentStep = 49;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-11.png"; 
                } else if (buttonClicked === 'B') {
                    alert("小茶菁現在不想吹乾身體！");
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想玩火！");
                }
            } else if (currentStep === 49) {
                if (buttonClicked === 'A') {
                    currentStep = 50;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-12.png"; 
                }
            } else if (currentStep === 50) {
                if (buttonClicked === 'A') {
                    alert("小茶菁做過熱敷按摩了！");
                } else if (buttonClicked === 'B') {
                    currentStep = 51;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-13.png"; 
                } else if (buttonClicked === 'C') {
                    alert("小茶菁現在不想玩火！");
                }
            } else if (currentStep === 51) {
                if (buttonClicked === 'A') {
                    currentStep = 52;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-14.png"; 
                }
            } else if (currentStep === 52) {
                if (buttonClicked === 'A') {
                    alert("小茶菁做過熱敷按摩了！");
                } else if (buttonClicked === 'B') {
                    alert("小茶菁做過吹乾身體了！");
                } else if (buttonClicked === 'C') {
                    currentStep = 53;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-15.png"; 
                }
            } else if (currentStep === 53) {
                if (buttonClicked === 'A') {
                    currentStep = 54;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-16.png"; 
                }
            } else if (currentStep === 54) {
                if (buttonClicked === 'A') {
                    currentStep = 55;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-17.png"; 
                }
            } else if (currentStep === 55) {
                if (buttonClicked === 'ANY') {
                    currentStep = 56;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-18.png"; 
                } else if (buttonClicked === 'A') {
                    currentStep = 56;
                    imgElement.src = "radwu/茶葉電子雞 紅烏龍茶線-18.png"; 
                }
            } else if (currentStep === 56) {
                if (buttonClicked === 'ANY') {
                    currentStep = 1;
                    imgElement.src = "img/home.png"; 
                }
            }

        }