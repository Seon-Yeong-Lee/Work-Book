# 넥사크로 (Nexacro)

### grid 자동 순번 채번하기
    Add user property
    name - griduserproperty
    value - no,!sort,!rowfix,!filter, !initial

### validate 체크
    Add user property
    name - validate
    value - title:파라미터값,required:false,maxlength:10,minlength:3
    (title은 리턴메세지값에 적용되므로 벨리데이션 필수로 입력)
    (required:필수, digit:숫자, date:날짜, max: 최대값, min:최소값, maxlength:최대길이, minlength: 최소길이)

### MDI영역 새탭으로 열기
    var args = new Object();
    args.pgmId = "";
    this.gfnNewMdi("새롭게 열 메뉴id", null, args);
