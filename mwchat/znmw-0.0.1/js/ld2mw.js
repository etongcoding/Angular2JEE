// var Sdstr = "";
// var Sdi = 0;

var next = function(Str, i) {
    var retValue = '';
    i = i + 1;
    if(Str.charAt(i) == 'v') {
        retValue = 'v' + Str.charAt(i+1);
    } else {
        retValue = Str.charAt(i);
    }
    return retValue;
}

var MergeArr = [
['jD','J'],
['jx','K'],
['jG','k'],
['jH','L'],
['jp','P'],
['9D','('],
['9x',')'],
['9G','0'],
['9H','_'],
['EH','r'],
['ED','w'],
['EG','R'],
['Ex','2'],
['Ei','T'],
['Ep','t'],
['E[','Y'],
['6D','^'],
['6G','7'],
['6H','*'],
['6x','&'],
['3H','%'],
['3D','#'],
['3x','$'],
['3G','4'],
['ip','I']
];

var Merge = function(Sdstr) {
  var retValue = '';
  var Temp = '';
  var x,i,Start=0,StrLen,Find=0;
  
  if(Sdstr.startsWith('ED')) {
	  retValue = 'W';
	  Start=2;
  }
  
  if(Sdstr.startsWith('EEG')) {
	  retValue = 'y';
	  Start=3;
  }

  i=Start;
  while(i<Sdstr.length) {
	 Temp=Sdstr.substr(i, 2);
	 for(x=0;x<MergeArr.length;x++)
	 {
		 if(MergeArr[x][0] == Temp) {
			 retValue += MergeArr[x][1];
			 i++;
			 Find=1;
             break;
		 }
	 }
	 if(Find==0)
	 {
		 if(Sdstr.charAt(i)!=',') {
		    retValue += Sdstr.charAt(i);
		 }
	 }
	 Find=0;
	 i++;
  }

  /*
  var reg_lt = /</gi;
  retValue = retValue.replace(reg_lt, '&lt;');
  var reg_gt = />/gi;
  retValue = retValue.replace(reg_gt, '&gt;');
  */

  return( retValue);
}

var ChEnd = function(Sdstr) {
    var retValue = Sdstr;
    if(retValue.length >= 2) {
        if(retValue.endsWith('<>')) {
            retValue = retValue.substring(0, retValue.length-2) + 'q>';
        }

        if(retValue.length >= 3) {
            if(retValue.endsWith('DDS')) {
                retValue = retValue.substring(0, retValue.length-3) + 'qs';
            }

            if(retValue.endsWith('Dxg')) {
                retValue = retValue.substring(0, retValue.length-3) + 'nxg';
            }
        }
    }

    return retValue;
}


var ChToMw = function(Sdstr)
{
	retValue = '';
	var TempStrv = '';
	var Temp = '';
	var LenStr = 0;
	var i = 0;

	TempStr = Sdstr;
	LenStr=TempStr.length;

	i=0;
	while(i<LenStr)
	{
		if(TempStr.charAt(i)==',' && (LenStr!=1)) {
			retValue += ",";
		}
		if(i==0)//head-b
		{
			if(LenStr==1)//
			{
				switch(TempStr.charAt(i))
				{
				case 'a':
					retValue += "ad";
					break;
				case 'e':
					retValue += "aS";
					break;
				case 'i':
					retValue += "aF";
					break;
				case 'o':
					retValue += "aH";
					break;
				case 'u':
					retValue += "aHg";
					break;
				case 'q':
					retValue += "ZDF";
					break;
				case 'w':
					retValue += "HHd";
					break;
				case 'r':
					retValue += "UHGd";
					break;
				case 't':
					retValue += "Lo";
					break;
				case 'y':
					retValue += "VHu";
					break;
				case 'p':
					retValue += "NDb";
					break;
				case 's':
					retValue += "GGd";
					break;
				case 'd':
					retValue += "Hd";
					break;
				case 'f':
					retValue += "h";
					break;
				case 'g':
					retValue += "CF";
					break;
				case 'h':
					retValue += "f";
					break;
				case 'j':
					retValue += "zh";
					break;
				case 'k':
					retValue += "Zh";
					break;
				case 'l':
					retValue += "AXd";
					break;
				case 'z':
					retValue += "UGnF";
					break;
				case 'x':
					retValue += "XGnF";
					break;
				case 'c':
					retValue += "NF";
					break;
				case 'v':
					retValue += "GGDb";
					break;
				case 'b':
					retValue += "Jb";
					break;
				case 'n':
					retValue += "Jd";
					break;
				case 'm':
					retValue += "GGDd";
					break;
				case ',':
					retValue += "'";
					break;
				case '.':
					retValue += "\"";
					break;
				case ';':
					retValue += ";";
					break;
			   case '!':
					retValue += "!";
					break;
			   case '?':
					retValue += "?";
					break;
			   case ':':
					retValue += ":";
					break;
			   case '/':
					retValue += "/";
					break;
			   case '\\':
					retValue += "\\";
					break;
			   case '|':
					retValue += "|";
					break;
			   /*case '(':
					retValue += "";
					break;
				 case ')':
					retValue += "";
					break;
				 case '[':
					retValue += "";
					break;
				 case ']':
					retValue += "";
					break;
				 case '{':
					retValue += "";
					break;
				 case '}':
					retValue += "";
					break;
				 case '<':
					retValue += "";
					break;
				 case '>':
					retValue += "";
					break;
				 case '"':
					retValue += "";
					break;
				 case '"':
					retValue += "";
					break;*/

				}
			}//һ������-e
			else
			{
				switch(TempStr.charAt(i))
				{
				case '_':
					//retValue += "aD";
					break;
				case 'a':
					retValue += "aD";
					break;
				case 'e':
					retValue += "A";
					break;
				case 'i':
					retValue += "aG";
					break;
				case 'o':
					retValue += "aH";
					break;
				case 'u':
					retValue += "aHG";
					break;
				case 'n':
					retValue += "N";
					break;
				case 'b':
					retValue += "j";
					break;
				case 'p':
					retValue += "9";
					break;
				case 'm':
					retValue += "U";
					break;
				case 'l':
					retValue += "O";
					break;
				case 's':
					retValue += "{";
					break;
				case 'x':
					retValue += "}";
					break;
				case 't':
					retValue += "Z";
					break;
				case 'd':
					retValue += "z";
					break;
				case 'q':
					retValue += "X";
					break;
				case 'j':
					retValue += "C";
					break;
				case 'y':
					retValue += "V";
					break;
				case 'r':
					retValue += "B";
					break;
				case 'w':
					retValue += "x";
					break;
				case 'f':
					retValue += "3";
					break;
				case 'k':
					retValue += "6";
					break;
				case 'z':
					retValue += "~";
					break;
				case 'c':
					retValue += "`";
					break;
				case 'v':
					i++;
					switch(TempStr.charAt(i))
					{
					case 'e':
						retValue += "Ax";
						break;
					case 'd':
						retValue += "Z";
						break;
					case 'l':
						retValue += "O@";
						break;
					case 'r':
						retValue += "1";
						break;
					case 'h':
						retValue += "a@";
						break;
					case 'q':
						retValue += "HH";
						break;
					case 'j':
						retValue += "@";
						break;
					}
					break;
				case 'h':
					if ((next(TempStr,i) == "a") ||
						(next(TempStr,i) == "o")||
						(next(TempStr,i) == "vo"))
					{retValue += "Q";}
					if ((next(TempStr,i) == "e") ||
						(next(TempStr,i) == "i") ||
						(next(TempStr,i) == "u") ||
						(next(TempStr,i) == "vu"))
					{retValue += "E";}
					break;
				case 'g':
					if ((next(TempStr,i) == "a") ||
						(next(TempStr,i) == "o") ||
						(next(TempStr,i) == "vo"))
					{retValue += "m";}
					else
					{retValue += "E";}
					break;

				}
			}
		}//head-e
		else
			if(i==LenStr-1)//end-b
			{
				switch(TempStr.charAt(i))
				{
					case '_':
						//retValue += "d";
						break;
					case 'n':
						retValue += "d";
						break;
					case 'b':
						retValue += "l";
						break;
					case 'p':
						retValue += "_";
						break;
					case 'm':
						retValue += "u";
						break;
					case 'l':
						retValue += "o";
						break;
					case 's':
						retValue += "+";
						break;
					case 'x':
						retValue += "=";
						break;
					case 't':
						retValue += "Zg";
						break;
					case 'd':
						retValue += "Hd";
						break;
					case 'q':
						retValue += "Xg";
						break;
					case 'j':
						retValue += "cg";
						break;
					case 'r':
						retValue += "b";
						break;
					case 'w':
						retValue += "xg";
						break;
					case 'f':
						retValue += "5";
						break;
					case 'k':
						retValue += "8";
						break;
					case 'z':
						retValue += "~g";
						break;
					case 'c':
						retValue += "`g";
						break;
					case 'a':
						switch(TempStr.charAt(i-1))
						{
						case 'b':
						case 'p':
						case 'f':
						case 'k':
							retValue += "DS";
							break;
						case 'h':
							if(LenStr==2)
							{retValue += "d";}
							else
							{retValue += "s";}
							break;
						case 'g':
							if(LenStr==2)
							{retValue += "d";}
							else
							{retValue += ">";}
							break;
						default:
							retValue += "d";
							break;
						}
						break;
					case 'e':
						switch(TempStr.charAt(i-1))
						{
						case 'b':
						case 'p':
						case 'h':
						case 'g':
							retValue += "DS";
							break;
						default:
							retValue += "d";
							break;
						}
						break;
					case 'i':
						switch(TempStr.charAt(i-1))
						{
						case 'b':
						case 'p':
						case 'f':
						case 'k':
						case 'h':
						case 'g':
							retValue += "Gg";
							break;
						default:
							retValue += "F";
							break;
						}
						break;
					case 'o':
						switch(TempStr.charAt(i-1))
						{
						case 'b':
						case 'p':
						case 'f':
						case 'k':
							retValue += "H";
							break;
						case 'g':
							if(LenStr==2)
								{retValue += "H";}
							else 
								retValue += "h";
							break;
						default:
							retValue += "h";
							break;
						}
						break;
					case 'u':
						switch(TempStr.charAt(i-1))
						{
						case 'b':
						case 'p':
						case 'f':
						case 'k':
						case 'h':
						case 'g':
							retValue += "H";
							break;
						default:
							retValue += "h";
							break;
						}
						break;
					case 'g':
						switch(TempStr.charAt(i-1))
						{
						case 'a':
						case 'o':
							retValue += "q";
							break;
						case 'e':
						case 'u':
						case 'i':
						case 'n':
							retValue += "e";
							break;
						}
						break;
				}
			}
			else
				if(TempStr.charAt(i)=='v' && i==LenStr-2 && LenStr>2)
				{
						i++;
						switch(TempStr.charAt(i))
						{
						case 'e':
								if(TempStr.charAt(i-2)=='n')
								{retValue += "M";}
								else
								{retValue += "s";}
								break;
						case 'o':
								retValue += "H";
								break;
						case 'u':
								retValue += "Hg";
								break;
						case 'g':
								retValue += "q";
								break;
						case 's':
								retValue += "[s";
								break;
						case 'd':
								retValue += "zg";
								break;
						case 'a':
								switch(TempStr.charAt(i-2))
								{
								case 'g':
									retValue += ">";
									break;
								case 'n':
									retValue += "M";
									break;
								case 'h':
								case 'm':
								case 'l':
								case 'y':
								case 'r':
								case 'w':
									retValue += "s";
									break;
								}
								break;
						}
						break;
				}//end-e
			else//mid-b
			{
				switch(TempStr.charAt(i))
				{
				case 'e':
					retValue += "D";
					break;
				case 'b':
					retValue += "j";
					break;
				case 'p':
					retValue += "9";
					break;
				case 's':
					retValue += "[";
					break;
				case 'x':
					retValue += "]";
					break;
				case 't':
					retValue += "Z";
					break;
				case 'q':
					retValue += "X";
					break;
				case 'j':
					retValue += "c";
					break;
				case 'f':
					retValue += "3";
					break;
				case 'k':
					retValue += "6";
					break;
				case 'z':
					retValue += "~";
					break;
				case 'c':
					retValue += "`";
					break;
				case 'v':
					i++;
					switch(TempStr.charAt(i))
					{
					case 't':
						retValue += "z";
						break;
					case 'e':
						retValue += "x";
						break;
					case 'i':
						retValue += "G";
						break;
					case 'n':
						retValue += "n";
						break;
					case 'g':
						retValue += "DD";
						break;
					case 'd':
						retValue += "z";
						break;
					case 'h':
						retValue += "@";
						break;
					case 'u':
						if(TempStr.charAt(0)=='v' &&
						   TempStr.charAt(1)!='e' &&
						   i==3 ||
						   i==2)
						{retValue += "H";}
						else
						{retValue += "HG";}
						break;
					}
					break;
				case 'a':
					if (TempStr.charAt(i-1)==',')
						{retValue += "DD";}
						else
						{retValue += "D";}
					break;
				case 'i':
					switch(TempStr.charAt(i-1))
					{
					case ',':
						retValue += "DG";
						break;
					case 'a':
					case 'e':
					case 'o':
						retValue += "GG";
						break;
					case 'u':
						if((i!=1)&&(i!=2)&&(TempStr.charAt(0)!='v'||i!=3))
						{retValue += "GG";}
						else
							if((TempStr.charAt(0)=='v') && i==3 || i==2||i==1)
							{retValue += "G";}
						break;
					case 'n':
					case 'b':
					case 'p':
					case 'h':
					case 'g':
					case 'm':
					case 'l':
					case 's':
					case 'x':
					case 't':
					case 'd':
					case 'q':
					case 'j':
					case 'y':
					case 'r':
					case 'w':
					case 'f':
					case 'k':
					case 'z':
					case 'c':
					case 'i':
						retValue += "G";
						break;
					}
					break;
				case 'o':
					if(TempStr.charAt(i-1)==',')
					{retValue += "DH";}
					else
					{retValue += "H";}
					break;
				case 'u':
					if(TempStr.charAt(i-1)==',')
					{retValue += "DHG";}
					else
						if(TempStr.charAt(0)=='v' &&
						   TempStr.charAt(1)!='e' &&
						   i==2 ||
						   i==1)
						{retValue += "HG";}
					else
					{retValue += "H";}
					break;
				case 'n':
					if (((next(TempStr,i) == "va")||
					   (next(TempStr,i) == "ve"))&&
					   i==LenStr-3)
					   {retValue += "d";}
					  else if
						((next(TempStr,i) == "a") ||
						(next(TempStr,i) == "e") ||
						(next(TempStr,i) == "i") ||
						(next(TempStr,i) == "o") ||
						(next(TempStr,i) == "u") ||
						(next(TempStr,i) == "va") ||
						(next(TempStr,i) == "ve") ||
						(next(TempStr,i) == "vo") ||
						(next(TempStr,i) == "vu"))
						{retValue += "n";}
					   else
					   {retValue += "D";}
					break;
				case 'h':
					if ((next(TempStr,i) == "a") ||
						(next(TempStr,i) == "o") ||
						(next(TempStr,i) == "vo"))
					{retValue += "DD";}
					if((next(TempStr,i) == "va"))
					{retValue += "q";}
					if(	(next(TempStr,i) == "e") ||
						(next(TempStr,i) == "i") ||
						(next(TempStr,i) == "u") ||
						(next(TempStr,i) == "vu"))
					{retValue += "E";}
					break;

				case 'g':
					if ((next(TempStr,i) == "a") ||
						(next(TempStr,i) == "o") ||
						(next(TempStr,i) == "vo"))
					{retValue += "<";}
					else
						if((next(TempStr,i) == "va"))
							{retValue += "q";}
						else
							if((TempStr.charAt(i-1)=='a' || TempStr.charAt(i-1)=='o') &&
								((next(TempStr,i) != "a") &&
									(next(TempStr,i) != "e") &&
									(next(TempStr,i) != "i") &&
									(next(TempStr,i) != "o") &&
									(next(TempStr,i) != "u") &&
									(next(TempStr,i) != "va") &&
									(next(TempStr,i) != "ve") &&
									(next(TempStr,i) != "vo") &&
									(next(TempStr,i) != "vu")))
								{retValue += "DD";}
							
							else
							{retValue += "E";}
					break;
				case 'm':
					if (((next(TempStr,i) == "va") ||
						(next(TempStr,i) == "ve"))&&
						i==LenStr-3)
						{retValue += "u";}
						else
						{retValue += "i";}
						break;
				case 'l':
					if (((next(TempStr,i) == "va") ||
						(next(TempStr,i) == "ve"))&&
						i==LenStr-3)
					{retValue += "o";}
					else
					{retValue += "p";}
					break;
				case 'd':
					if ((next(TempStr,i) == "a") ||
						(next(TempStr,i) == "e") ||
						(next(TempStr,i) == "i") ||
						(next(TempStr,i) == "o") ||
						(next(TempStr,i) == "u") ||
						(next(TempStr,i) == "va") ||
						(next(TempStr,i) == "ve") ||
						(next(TempStr,i) == "vo") ||
						(next(TempStr,i) == "vu"))
					{retValue += "z";}
					else
					   {retValue += "HD";}
					break;
				case 'y':
					if (((next(TempStr,i) == "va") ||
						(next(TempStr,i) == "ve"))&&
						i==LenStr-3)
					{retValue += "F";}
					else
						{retValue += "v";}
					break;
				case 'r':
					if (((next(TempStr,i) == "va") ||
						(next(TempStr,i) == "ve"))&&
						i==LenStr-3)
					{retValue += "b";}
					else
						{retValue += "B";}
					break;
				case 'w':
					if (((next(TempStr,i) == "va") ||
						(next(TempStr,i) == "ve"))&&
						i==LenStr-3)
					{retValue += "h";}
					else
						{retValue += "x";}
					break;
				}
			}//mid-e
	i++;
	}
	
	return retValue;
}

var ld2mw = function(ldStrings) {
	var mwString;
	var retMwString = '';
	var fields = ldStrings.split(' ');
	for(var i=0; i<fields.length; i++) {
		mwString = fields[i];
		mwString = ChToMw(mwString);
		mwString = ChEnd(mwString);
		mwString = Merge(mwString);
		retMwString += mwString + ' ';
	}
	return retMwString;
}

var encodemw = function( mwString ) {
	var retValue;
	var reg_lt = /</gi;
    retValue = mwString.replace(reg_lt, '&lt;');
    var reg_gt = />/gi;
    retValue = retValue.replace(reg_gt, '&gt;');
    return retValue;
}